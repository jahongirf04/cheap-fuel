import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { GasStationModule } from './gas-station/gas-station.module';
import {GasStationBranchModule} from './gas-station-branch/module';
import {FuelTypeModule} from './fuel-types/module';
import {GasStationFuelTypeModule} from './gas-station-fuel-type/module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [],
      autoLoadModels: true,
      logging: true,
    }),
    GasStationModule,
    FuelTypeModule,
    GasStationBranchModule,
    GasStationFuelTypeModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
