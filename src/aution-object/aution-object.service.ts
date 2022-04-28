import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAuctionObjectDto } from 'dto/createAuctionObject.dto';
import { AuctionObjectEntity } from 'entities/auctionObject.entity';
import { getConnection, Repository } from 'typeorm';
import { updateAuctionObjectDto } from 'dto/updateAuctionObject.dto';

@Injectable()
export class AutionObjectService {
    constructor(@InjectRepository(AuctionObjectEntity) private readonly auctionObjectRepository: Repository<AuctionObjectEntity>) {

    }

    async createAuctionObject(createAuctionObjectDto: CreateAuctionObjectDto) {
        console.log("my object", createAuctionObjectDto)
        try {
            return await this.auctionObjectRepository.save(createAuctionObjectDto);
        } catch (error) {
            console.log(error);
        }
    }

    async getAuctionObjectById(id: string) {
        try {
            return await this.auctionObjectRepository.findOne({
                where: { id: id },
                relations: ['object'],

            });
        }
        catch (error) {
            console.log(error);
        }
    }


    async getAllAuctionObject() {
        try {
            const allAuctionObject = await this.auctionObjectRepository.find({
                relations: ['object'],
                order: {
                    id: 'DESC',
                },
            })


        } catch (error) {
            console.log(error);
        }
    }

    async updateOrCreateAuctionObject(id: number, updateAuctionObject: updateAuctionObjectDto) {
        let auctionObject = await this.auctionObjectRepository.findOne({
            where: { object: id }
        })

        console.log(updateAuctionObject)
        auctionObject.auction_date = updateAuctionObject.auction_date;
        auctionObject.auction_price = updateAuctionObject.auction_price;
        auctionObject.user = updateAuctionObject.user;
        auctionObject.object = updateAuctionObject.object;
        auctionObject.end_date = updateAuctionObject.object.dateEnd;

        if (!auctionObject) {
            try {
                await this.auctionObjectRepository.save(
                    { ...updateAuctionObject }
                )
                return;
            } catch (error) {
                console.log(error);
            }
        }
        return await this.auctionObjectRepository.save(auctionObject);
    }

}
