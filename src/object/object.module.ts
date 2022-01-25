import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObjectEntity } from 'entities/object.entity';
import { ObjectController } from './object.controller';
import { ObjectService } from './object.service';

@Module({
  providers: [ObjectService],
  controllers: [ObjectController],
  imports: [TypeOrmModule.forFeature([ObjectEntity])]
})
export class ObjectModule { }
