import { Module } from '@nestjs/common';
import { Catunimed19Controller } from './catunimed19.controller';
import { Catunimed19Service } from './catunimed19.service';

@Module({
  controllers: [Catunimed19Controller],
  providers: [Catunimed19Service]
})
export class Catunimed19Module {}
