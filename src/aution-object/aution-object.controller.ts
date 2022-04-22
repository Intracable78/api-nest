import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateAuctionObjectDto } from 'dto/createAuctionObject.dto';
import { AutionObjectService } from './aution-object.service';
import { updateAuctionObjectDto } from 'dto/updateAuctionObject.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/auction-object')
export class AutionObjectController {
    constructor(private auctionObjectService: AutionObjectService) {

    }

    @Post('create')
    @UseGuards(AuthGuard('jwt'))
    async createAuctionObject(@Body() createAuctionObjectDto: CreateAuctionObjectDto) {
        return await this.auctionObjectService.createAuctionObject(createAuctionObjectDto);
    }

    @Get(':id')
    async getAuctionObjectById(@Param('id') id: string) {
        return await this.auctionObjectService.getAuctionObjectById(id);
    }

    @Get()
    async getAllAuctionObject() {
        return await this.auctionObjectService.getAllAuctionObject();
    }

    @Patch(':id')
    @UseGuards(AuthGuard('jwt'))
    async updateAuctionObject(@Param('id') id: number, @Body() updateAuctionPrice: updateAuctionObjectDto) {
        return await this.auctionObjectService.updateOrCreateAuctionObject(+id, updateAuctionPrice);
    }



}
