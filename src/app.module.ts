import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { RankModule } from './rank/rank.module';
import { Connection } from 'typeorm';
import { ObjectModule } from './object/object.module';
import { AutionObjectModule } from './aution-object/aution-object.module';
import { CategoryModule } from './category/category.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'formation13@',
      database: 'uf_database',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    UserModule,
    RankModule,
    CategoryModule,
    ObjectModule,
    AutionObjectModule,],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) { }
}
