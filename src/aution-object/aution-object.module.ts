import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuctionObjectEntity } from 'entities/auctionObject.entity';
import { AutionObjectController } from './aution-object.controller';
import { AutionObjectService } from './aution-object.service';

@Module({
  controllers: [AutionObjectController],
  providers: [AutionObjectService],
  imports: [TypeOrmModule.forFeature([AuctionObjectEntity])]
})
export class AutionObjectModule { }
