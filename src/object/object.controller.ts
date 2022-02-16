import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateObjectDto } from 'dto/createObject.dto';
import { UpdateObjectDto } from 'dto/updateObject.dto';
import { ObjectService } from './object.service';

@Controller('api/object')
export class ObjectController {

    constructor(private readonly objectService: ObjectService) {

    }

    @Post('create')
    createObject(@Body() createObjectDto: CreateObjectDto) {
        return this.objectService.createObject(createObjectDto)
    }

    @Get()

    getObject() {
        return this.objectService.getObject();
    }

    @Get(':id')
    getObjectById(@Param('id') id: string) {
        return this.objectService.getObjectById(id);
    }
    @Patch('update/:id')

    updateObject(@Param('id') id: string, @Body() updateObjectDto: UpdateObjectDto) {
        return this.objectService.updateObject(+id, updateObjectDto)
    }
    @Delete(':id')
    deleteObjectById(@Param('id') id: string) {
        return this.objectService.deleteObjectById(+id);
    }


}
