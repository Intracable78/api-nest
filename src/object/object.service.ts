import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateObjectDto } from 'dto/createObject.dto';
import { UpdateObjectDto } from 'dto/updateObject.dto';
import { ObjectEntity } from 'entities/object.entity';
import { UserEntity } from 'entities/user.entity';
import { LessThan, MoreThan, Repository } from 'typeorm';
import { AuctionObjectEntity } from '../../entities/auctionObject.entity';

@Injectable()
export class ObjectService {
    constructor(
        @InjectRepository(ObjectEntity) private readonly objectRepository: Repository<ObjectEntity>
    ) {

    }

    async createObject(createObjectDto: CreateObjectDto): Promise<ObjectEntity> {
        return await this.objectRepository.save(createObjectDto);
    }

    async getObject() {
        return await this.objectRepository.find({
            relations: ['auctionObjects'],
            where: { dateEnd: MoreThan(new Date()) },
            order: {
                id: 'DESC'
            }
        });
    }
    async getObjectByUserId(userId: string) {
        return await this.objectRepository.find({
            relations: ['auctionObjects'],
            where: { user: userId, dateEnd: MoreThan(new Date()) }
        })
    }

    async getObjectById(id: string) {
        return await this.objectRepository.findOne(
            {
                where: { id: id },
                relations: ['auctionObjects'],
                order: {
                    id: 'ASC'
                }

            }
        );
    }
    async updateObject(id: number, updateObjectDto: UpdateObjectDto): Promise<ObjectEntity> {
        const updatedObject = await this.objectRepository.preload({
            id,
            ...updateObjectDto
        })

        if (!updatedObject) {
            throw new NotFoundException('Object id ${id} not found');
        }

        return await this.objectRepository.save(updatedObject)
    }

    async deleteObjectById(id: number) {
        return await this.objectRepository.delete(id);
    }



}
