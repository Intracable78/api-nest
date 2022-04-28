import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateObjectDto } from 'dto/createObject.dto';
import { UpdateObjectDto } from 'dto/updateObject.dto';

import { ObjectService } from './object.service';

@Controller('api/object')
export class ObjectController {

    constructor(
        private readonly objectService: ObjectService
    ) {

    }

    @Post('create')
    @UseGuards(AuthGuard('jwt'))
    createObject(@Body() createObjectDto: CreateObjectDto) {
        console.log(createObjectDto)
        return this.objectService.createObject(createObjectDto)
    }

    @Get()
    //@UseGuards(AuthGuard('jwt'))
    getObject() {
        return this.objectService.getObject();
    }

    @Get(':id')
    getObjectById(@Param('id') id: string) {
        return this.objectService.getObjectById(id);
    }
    @Patch('update/:id')
    @UseGuards(AuthGuard('jwt'))

    updateObject(@Param('id') id: string, @Body() updateObjectDto: UpdateObjectDto) {
        return this.objectService.updateObject(+id, updateObjectDto)
    }
    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    deleteObjectById(@Param('id') id: string) {
        return this.objectService.deleteObjectById(+id);
    }

    @Get('user/:id')
    getObjectByUserId(@Param('id') id: string) {
        return this.objectService.getObjectByUserId(id);
    }


}
