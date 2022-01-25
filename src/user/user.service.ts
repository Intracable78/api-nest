import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'dto/createUser.dto';
import { UpdateUserDto } from 'dto/updateuser.dto';
import { ObjectEntity } from 'entities/object.entity';
import { DeleteResult, Repository } from 'typeorm';
import { UserEntity } from './../../entities/user.entity';

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
}
