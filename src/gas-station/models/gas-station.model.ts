import {Table, Model, Column, DataType, HasMany} from "sequelize-typescript"

interface CompanyAttr{
    main_gas_station_name: string
}

import { GasStationBranch } from "src/gas-station-branch/models/model"

@Table({ tableName: 'gas-station' })
export class GasStation extends Model<GasStation, CompanyAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  main_gas_station_name: string;

  @HasMany(() => GasStationBranch)
  machines: GasStationBranch[];
}