import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'dto/createUser.dto';
import { UserService } from './user.service';

@Controller('api/user')
export class UserController {
    constructor(private userService: UserService) {

    }

    @Post('create')
    async createUser(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto)
        await this.userService.create(createUserDto);

    }

    @Get()
    getUsers() {
        return this.userService.getUsers();
    }


}
