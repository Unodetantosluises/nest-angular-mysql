import { Module } from '@nestjs/common';
import { Catunimed19Controller } from './controller/catunimed19.controller';
import { Catunimed19Service } from './service/catunimed19.service';

@Module({
  controllers: [Catunimed19Controller],
  providers: [Catunimed19Service]
})
export class Catunimed19Module {}
