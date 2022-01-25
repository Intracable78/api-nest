import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAuctionObjectDto } from 'dto/createAuctionObject.dto';
import { AuctionObjectEntity } from 'entities/auctionObject.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AutionObjectService {
    constructor(@InjectRepository(AuctionObjectEntity) private readonly auctionObjectRepository: Repository<AuctionObjectEntity>) {

    }

    async createAuctionObject(createAuctionObjectDto: CreateAuctionObjectDto) {
        return await this.auctionObjectRepository.save(createAuctionObjectDto);
    }
}
