import { Body, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'dto/createUser.dto';
import { UpdateUserDto } from 'dto/updateuser.dto';
import { ObjectEntity } from 'entities/object.entity';
import { DeleteResult, Repository } from 'typeorm';
import { LoginUserDto } from '../../dto/loginUser.dto';
import { UserDto } from '../../dto/user.dto';
import { toUserDto } from '../shared/mapper';
import { UserEntity } from './../../entities/user.entity';
import * as bcrypt from 'bcrypt';
import { comparePasswords } from '../shared/utils';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
    ) { }
    async create(createUserDto: CreateUserDto) {
        const newUser = this.userRepository.create(createUserDto)
        await this.userRepository.save(newUser);
        return newUser;

    }

    async getUsers() {
        const users = await this.userRepository.find();
        return users;
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        const updatedUser = await this.userRepository.preload({
            id,
            ...updateUserDto
        })
        if (!updatedUser) {
            throw new NotFoundException('Object id : ' + id + ' not found');
        }
        return await this.userRepository.save(updatedUser)
    }
    async getUserById(id: number) {
        const findUser = await this.userRepository.findOne(id);
        if (!findUser) {
            throw new NotFoundException('user id : ' + id + ' not found')
        }
        return findUser;
    }

    async deleteUserById(id: number): Promise<DeleteResult> {
        const deletedUser = await this.userRepository.delete(id);
        if (!deletedUser) {
            throw new NotFoundException('User id : ' + id + ' not found');
        }
        return deletedUser
    }

    /*async setToken(token: string, userId: number) {
        const updatedTokenUser = await this.userRepository.findOne(userId)
        console.log(updatedTokenUser)
        updatedTokenUser.token = token;
        if (!updatedTokenUser) {
            throw new NotFoundException('User id : ' + userId + ' not found');
        }
        return await this.userRepository.save(updatedTokenUser)
    } */

    async findByLogin({ email, password }: LoginUserDto): Promise<UserDto> {
        const user = await this.userRepository.findOne({ where: { email } });

        if (!user) {
            throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
        }

        // compare passwords    
        const areEqual = await comparePasswords(user.password, password);



        if (!areEqual) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }

        return toUserDto(user);
    }

    async findOne(options?: object): Promise<UserDto> {
        const user = await this.userRepository.findOne(options);
        return toUserDto(user);
    }

    async findByPayload({ email }: any): Promise<UserDto> {
        return await this.findOne({
            where: { email }
        });
    }

    async createUser(userDto: CreateUserDto): Promise<UserDto> {
        const { password, email, address, birthDate, country, lastName, phone, name } = userDto;

        // check if the user exists in the db    
        const userInDb = await this.userRepository.findOne({
            where: { email }
        });
        if (userInDb) {
            throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
        }

        const user: UserEntity = await this.userRepository.create({ password, email, address, birthDate, country, lastName, phone, name });
        await this.userRepository.save(user);
        return toUserDto(user);
    }
}

