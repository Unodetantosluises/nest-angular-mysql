import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Catunimed19 } from '../entity/Catunimed19';
import { Repository } from 'typeorm';
import { CreateCatUnimed19Dto } from '../dto/create-catunimed19.dto';

@Injectable()
export class Catunimed19Service {

    constructor(@InjectRepository(Catunimed19) private catUniMed19Repository: Repository<Catunimed19>) {}

    createcatUniMed19(catUniMed19: CreateCatUnimed19Dto){
        const newCatUniMed19 = this.catUniMed19Repository.create(catUniMed19);
        return this.catUniMed19Repository.save(newCatUniMed19);
    }

    getcatUniMeds19(){
        return this.catUniMed19Repository.find()
    }

    getcatUniMed19(clp: string): Promise<Catunimed19 | null> {
        return this.catUniMed19Repository.findOne({
            where: { clp }
        });
    }
}
