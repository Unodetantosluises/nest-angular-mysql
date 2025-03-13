import { Module } from '@nestjs/common';
import { CatPmibccService } from './cat_pmibcc.service';
import { CatPmibccController } from './cat_pmibcc.controller';

@Module({
  providers: [CatPmibccService],
  controllers: [CatPmibccController]
})
export class CatPmibccModule {}
