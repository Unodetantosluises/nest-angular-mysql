import { Module } from '@nestjs/common';
import { CatPmiController } from './controller/cat_pmi.controller';
import { CatPmiService } from './service/cat_pmi.service';

@Module({
  controllers: [CatPmiController],
  providers: [CatPmiService]
})
export class CatPmiModule {}
