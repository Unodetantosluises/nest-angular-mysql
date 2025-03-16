import { Module } from '@nestjs/common';
import { CatPmiController } from './controller/cat_pmi.controller';
import { CatPmiService } from './service/cat_pmi.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatPmi } from './entity/CatPmi';

@Module({
  imports: [TypeOrmModule.forFeature([CatPmi])],
  controllers: [CatPmiController],
  providers: [CatPmiService]
})
export class CatPmiModule {}
