import { Module } from '@nestjs/common';
import { Catunimed19Controller } from './controller/catunimed19.controller';
import { Catunimed19Service } from './service/catunimed19.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Catunimed19 } from './entity/Catunimed19';

@Module({
  imports: [TypeOrmModule.forFeature([Catunimed19])],
  controllers: [Catunimed19Controller],
  providers: [Catunimed19Service]
})
export class Catunimed19Module {}
