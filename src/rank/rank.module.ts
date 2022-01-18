import { Module } from '@nestjs/common';
import { RankController } from './rank.controller';
import { RankService } from './rank.service';
import { RankEntity } from 'entities/rank.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [RankController],
  providers: [RankService],
  imports: [TypeOrmModule.forFeature([RankEntity])]
})
export class RankModule { }
