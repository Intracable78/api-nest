import { Body, Controller, Post } from '@nestjs/common';
import { CreateAuctionObjectDto } from 'dto/createAuctionObject.dto';
import { AutionObjectService } from './aution-object.service';

@Controller('api/aution-object')
export class AutionObjectController {
    constructor(private auctionObjectService: AutionObjectService) {

    }

    @Post('create')
    async createAuctionObject(@Body() createAuctionObjectDto: CreateAuctionObjectDto) {
        return await this.auctionObjectService.createAuctionObject(createAuctionObjectDto);

    }



}
