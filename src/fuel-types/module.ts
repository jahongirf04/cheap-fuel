import { Module } from '@nestjs/common';
import { myController } from './controller';
import { Service } from './service';
import { SequelizeModule } from '@nestjs/sequelize';
import { FuelType } from './models/model';

@Module({
  imports: [SequelizeModule.forFeature([FuelType])],
  controllers: [myController],
  providers: [Service],
})
export class FuelTypeModule {}
