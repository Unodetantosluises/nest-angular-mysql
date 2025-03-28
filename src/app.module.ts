import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatPmiModule } from './cat_pmi/cat_pmi.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatPmi } from './cat_pmi/entity/CatPmi';
import { CatPmibcc } from './cat_pmibcc/entity/CatPmibcc';
import { Catunimed19 } from './catunimed19/entity/Catunimed19';
import { Pmi2019 } from './pmi2019/entity/Pmi2019';
import { CatPmibccModule } from './cat_pmibcc/cat_pmibcc.module';
import { Catunimed19Module } from './catunimed19/catunimed19.module';
import { Pmi2019Module } from './pmi2019/pmi2019.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }), // Carga el archivo .env de forma global
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [CatPmi, CatPmibcc, Catunimed19, Pmi2019],
        synchronize: true, // No usar en producción, puede borrar datos
      }),
    }),
    CatPmiModule,
    CatPmibccModule,
    Catunimed19Module,
    Pmi2019Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule { }
