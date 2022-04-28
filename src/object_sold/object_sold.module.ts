import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObjectSoldEntity } from '../../entities/objectSold.entity';
import { ObjectSoldController } from './object_sold.controller';
import { ObjectSoldService } from './object_sold.service';

@Module({
    providers: [ObjectSoldService],
    controllers: [ObjectSoldController],
    imports: [TypeOrmModule.forFeature([ObjectSoldEntity])]
})
export class ObjectSoldModule { }
