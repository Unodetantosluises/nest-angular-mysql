import { Module } from '@nestjs/common';
import { Pmi2019Controller } from './pmi2019.controller';
import { Pmi2019Service } from './pmi2019.service';

@Module({
  controllers: [Pmi2019Controller],
  providers: [Pmi2019Service]
})
export class Pmi2019Module {}
