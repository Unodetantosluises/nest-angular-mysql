import { Module } from '@nestjs/common';
import { CatPmibccService } from './service/cat_pmibcc.service';
import { CatPmibccController } from './controller/cat_pmibcc.controller';

@Module({
  providers: [CatPmibccService],
  controllers: [CatPmibccController]
})
export class CatPmibccModule {}
