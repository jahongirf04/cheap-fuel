import { Module } from '@nestjs/common';
import { myController } from './controller';
import { Service } from './service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Machine } from './models/model';

@Module({
  imports: [SequelizeModule.forFeature([Machine])],
  controllers: [myController],
  providers: [Service],
})
export class myModule {}
