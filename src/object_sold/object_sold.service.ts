import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateObjectDto } from 'dto/createObject.dto';
import { UpdateObjectDto } from 'dto/updateObject.dto';
import { ObjectSoldEntity } from 'entities/objectSold.entity';
import { UserEntity } from 'entities/user.entity';
import { LessThan, MoreThan, Repository } from 'typeorm';
import { AuctionObjectEntity } from '../../entities/auctionObject.entity';

@Injectable()
export class ObjectSoldService {
    constructor(
        @InjectRepository(ObjectSoldEntity) private readonly objectSoldRepository: Repository<ObjectSoldEntity>,
    ) {

    }

    async getObjectSoldByUserId(userId: string) {
        return await this.objectSoldRepository.find({
            relations: ['object'],
            where: { user: userId }
        })
    }
}