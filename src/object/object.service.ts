import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateObjectDto } from 'dto/createObject.dto';
import { UpdateObjectDto } from 'dto/updateObject.dto';
import { ObjectEntity } from 'entities/object.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ObjectService {
    constructor(@InjectRepository(ObjectEntity) private readonly objectRepository: Repository<ObjectEntity>) {

    }

    async createObject(createObjectDto: CreateObjectDto): Promise<ObjectEntity> {
        return await this.objectRepository.save(createObjectDto);
    }

    async getObject() {
        return await this.objectRepository.find();
    }

    async getObjectById(id: string) {
        console.log(id);
        return await this.objectRepository.findOne(id);
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
