import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ObjectSoldService } from './object_sold.service';

@Controller('api/objectSold')
export class ObjectSoldController {

    constructor(
        private readonly objectService: ObjectSoldService
    ) {

    }


    @Get(':id')
    getObjectByUserId(@Param('id') id: string) {
        return this.objectService.getObjectSoldByUserId(id);
    }
}

