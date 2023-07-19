import { Module } from '@nestjs/common';
import { CompanyController } from './gas-station.controller';
import { CompanyService } from './gas-station.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { GasStation } from './models/gas-station.model';

@Module({
  imports: [SequelizeModule.forFeature([GasStation])],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class GasStationModule {}
