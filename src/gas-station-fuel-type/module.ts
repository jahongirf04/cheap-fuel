import { Module } from '@nestjs/common';
import { myController } from './controller';
import { Service } from './service';
import { SequelizeModule } from '@nestjs/sequelize';
import { GasStationFuelType } from './models/model';

@Module({
  imports: [SequelizeModule.forFeature([GasStationFuelType])],
  controllers: [myController],
  providers: [Service],
})
export class GasStationFuelTypeModule {}
