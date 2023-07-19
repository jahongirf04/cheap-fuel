import {Table, Model, Column, DataType, BelongsToMany} from "sequelize-typescript"
import { GasStationBranch } from "src/gas-station-branch/models/model";
import { GasStationFuelType } from 'src/gas-station-fuel-type/models/model';

interface TableAttr {
  name: string
}

@Table({ tableName: 'fuel-types' })
export class FuelType extends Model<FuelType, TableAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(64),
  })
  name: string;

  @BelongsToMany(() => GasStationBranch, () => GasStationFuelType)
  machines: [GasStationBranch];
}