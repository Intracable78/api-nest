import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'dto/createUser.dto';
import { Repository } from 'typeorm';
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
}
