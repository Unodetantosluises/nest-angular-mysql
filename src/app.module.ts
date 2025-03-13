import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatPmiModule } from './cat_pmi/cat_pmi.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatPmi } from './cat_pmi/entity/CatPmi';
import { CatPmibcc } from './entities/entities/CatPmibcc';
import { Catunimed19 } from './entities/entities/Catunimed19';
import { Pmi2019 } from './entities/entities/Pmi2019';
import { CatPmibccModule } from './cat_pmibcc/cat_pmibcc.module';
import { Catunimed19Module } from './catunimed19/catunimed19.module';
import { Pmi2019Module } from './pmi2019/pmi2019.module';

@Module({
  imports: [
    TypeOrmModule.forRoot ({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '34234de0',
      database: 'mgi-pruebas',
      entities: [CatPmi, CatPmibcc, Catunimed19, Pmi2019],
      synchronize: false,
    }),
    CatPmiModule,
    CatPmibccModule,
    Catunimed19Module,
    Pmi2019Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
