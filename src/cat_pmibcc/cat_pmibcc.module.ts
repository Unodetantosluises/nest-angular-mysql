import { Module } from '@nestjs/common';
import { CatPmibccService } from './service/cat_pmibcc.service';
import { CatPmibccController } from './controller/cat_pmibcc.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatPmibcc } from './entity/CatPmibcc';

@Module({
  imports: [TypeOrmModule.forFeature([CatPmibcc])],
  providers: [CatPmibccService],
  controllers: [CatPmibccController]
})
export class CatPmibccModule {}
