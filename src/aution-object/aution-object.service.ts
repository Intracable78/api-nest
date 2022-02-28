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

    async updateAuctionObject(id: number, updateAuctionObject: updateAuctionObjectDto) {
        const updateCategory = await this.auctionObjectRepository.preload({ id, ...updateAuctionObject })
        if (!updateCategory) {
            throw new NotFoundException('Catgory id ' + id + ' not exist in databse')
        }

        return await this.auctionObjectRepository.save(updateCategory);
    }

}
