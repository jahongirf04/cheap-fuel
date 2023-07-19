import {
  Controller,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Get,
} from '@nestjs/common';
import { CompanyService } from './gas-station.service';
import { AddDto } from './dto/add.dto';
import { UpdateDto } from './dto/update-dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly service: CompanyService) {}

  @Post('add')
  async add(@Body() addDto: AddDto) {
    const arg = await this.service.add(addDto);
    return arg;
  }
  @Get('get')
  async get() {
    const args = await this.service.get();
    return args;
  }

  @Get('get/:id')
  async getOne(@Param('id') myId) {
    const arg = await this.service.getOne(myId);
    return arg;
  }

  @Put('update/:id')
  async update(@Body() updateDto: UpdateDto, @Param('id') myId) {
    await this.service.update(updateDto, myId);
    return 'Updated';
  }

  @Delete('update/:id')
  async delete(@Param('id') myId) {
    await this.service.delete(myId);
    return 'deleted';
  }
}
