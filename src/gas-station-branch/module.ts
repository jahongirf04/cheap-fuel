import { Module } from '@nestjs/common';
import { myController } from './controller';
import { Service } from './service';
import { SequelizeModule } from '@nestjs/sequelize';
import { GasStationBranch } from './models/model';

@Module({
  imports: [SequelizeModule.forFeature([GasStationBranch])],
  controllers: [myController],
  providers: [Service],
})
export class GasStationBranchModule {}
