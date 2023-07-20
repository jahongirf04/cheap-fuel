import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GasStation } from './models/gas-station.model';
import { AddDto } from './dto/add.dto';
import { UpdateDto } from './dto/update-dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(GasStation)
    private tableRepo: typeof GasStation,
  ) {}

  async add(addDto: AddDto): Promise<GasStation> {
    const company = await this.tableRepo.create(addDto);
    return company;
  }

  async get() {
    const args = await this.tableRepo.findAll({ include: { all: true } });
    return args;
  }

  async getOne(myId): Promise<GasStation> {
    const arg = await this.tableRepo.findOne({
      where: { id: myId },
      include: { all: true },
    });
    return arg;
  }

  async update(updateDto: UpdateDto, myId): Promise<GasStation> {
    await this.tableRepo.update(updateDto, { where: { id: myId } });
    return;
  }

  async delete(myId) {
    const arg = await this.tableRepo.findOne({ where: { id: myId } });
    arg.destroy();
    return;
  }
}
