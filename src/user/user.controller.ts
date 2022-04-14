import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, Put, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from 'dto/createUser.dto';
import { UpdateUserDto } from 'dto/updateuser.dto';
import { ObjectEntity } from 'entities/object.entity';
import { UserService } from './user.service';

@Controller('api/user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post('create')
    async createUser(@Body() createUserDto: CreateUserDto) {
        await this.userService.create(createUserDto);
    }

    /* @Put('setToken/:id/:idToken')
     async setToken(@Param('idToken') tokenId: string, @Param('id') userId: number) {
         console.log('token' + tokenId);
         await this.userService.setToken(tokenId, userId);
     } */

    @Get()
    @UseGuards(AuthGuard('jwt'))
    getUsers(@Req() req: any) {
        console.log(req)
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

    @Delete('delete/:id')
    async deleteUserById(@Param('id') id: string) {
        return await this.userService.deleteUserById(+id);
    }
}
