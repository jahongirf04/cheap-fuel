import {Table, Model, Column, DataType, ForeignKey, BelongsTo, BelongsToMany} from "sequelize-typescript"
import { GasStation } from "src/gas-station/models/gas-station.model";
import { FuelType } from "src/fuel-types/models/model";
import { GasStationFuelType } from "src/gas-station-fuel-type/models/model";

interface TableAttr {
  branchName: string
  address: string
  phone: string
  gasStationId: number;
}

@Table({ tableName: 'gas-station-branch' })
export class GasStationBranch extends Model<GasStationBranch, TableAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(64),
  })
  branchName: string;

  @Column({
    type: DataType.STRING(64),
  })
  address: string;

  @Column({
    type: DataType.STRING(64),
  })
  phone: string;

  @ForeignKey(() => GasStation)
  @Column({
    type: DataType.INTEGER,
  })
  gasStationId: number;

  @BelongsTo(() => GasStation)
  company: GasStation;

  @BelongsToMany(() => FuelType, () => GasStationFuelType)
  drivers: FuelType[];
}