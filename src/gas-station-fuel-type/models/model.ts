import {Table, Model, Column, DataType, ForeignKey, BelongsTo} from "sequelize-typescript"
import { FuelType } from "src/fuel-types/models/model";
import { GasStationBranch } from "src/gas-station-branch/models/model";

interface TableAttr {
  gasStationBranchId: number;
  fuelTypeId: number;
  price: number
}

@Table({ tableName: 'gas-station-fuel-type' })
export class GasStationFuelType extends Model<GasStationFuelType, TableAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  
  @ForeignKey(() => GasStationBranch)
  @Column({
    type: DataType.INTEGER,
  })
  gasStationBranchId: number;

  @ForeignKey(() => FuelType)
  @Column({
    type: DataType.INTEGER,
  })
  fuelTypeId: number;

  @Column({
    type: DataType.INTEGER
  })
  price: number
}