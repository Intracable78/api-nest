import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, Put } from '@nestjs/common';
import { CreateUserDto } from 'dto/createUser.dto';
import { UpdateUserDto } from 'dto/updateuser.dto';
import { ObjectEntity } from 'entities/object.entity';
import { UserService } from './user.service';

@Controller('api/user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('create')
    async createUser(@Body() createUserDto: CreateUserDto) {
        await this.userService.create(createUserDto);
    }

    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Patch('update/:id')
    async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(+id, updateUserDto)
    }

    @Get(':id')
    async getUserById(@Param('id') id: string) {
        return await this.userService.getUserById(+id);
    }

    @Delete(':id')
    async deleteUserById(@Param('id') id: string) {
        return await this.userService.deleteUserById(+id);
    }
}
