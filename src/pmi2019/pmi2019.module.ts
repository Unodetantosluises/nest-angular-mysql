import { Module } from '@nestjs/common';
import { Pmi2019Controller } from './controller/pmi2019.controller';
import { Pmi2019Service } from './service/pmi2019.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pmi2019 } from './entity/Pmi2019';

@Module({
  imports: [TypeOrmModule.forFeature([Pmi2019])],
  controllers: [Pmi2019Controller],
  providers: [Pmi2019Service]
})
export class Pmi2019Module {}
