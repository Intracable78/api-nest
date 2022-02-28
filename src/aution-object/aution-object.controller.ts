import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateAuctionObjectDto } from 'dto/createAuctionObject.dto';
import { AutionObjectService } from './aution-object.service';
import { updateAuctionObjectDto } from 'dto/updateAuctionObject.dto';

@Controller('api/auction-object')
export class AutionObjectController {
    constructor(private auctionObjectService: AutionObjectService) {

    }

    @Post('create')
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
    async updateAuctionObject(@Param('id') id: number, @Body() updateAuctionPrice: updateAuctionObjectDto) {
        console.log('ok')
        return await this.auctionObjectService.updateAuctionObject(+id, updateAuctionPrice);
    }



}
