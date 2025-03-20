import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pmi2019 } from '../entity/Pmi2019';
import { Repository } from 'typeorm';
import { CreatePmi2019Dto } from '../dto/create-pmi2019.dto';

@Injectable()
export class Pmi2019Service {
    constructor(@InjectRepository(Pmi2019) private pmi2019Repository: Repository<Pmi2019>) {}

    createPmi2019(pmi2019: CreatePmi2019Dto) {
        const newPmi2019 = this.pmi2019Repository.create(pmi2019);
        return this.pmi2019Repository.save(pmi2019);
    }

    getPmis2019() {
        return this.pmi2019Repository.find()
    }

    getPmi2019(no: number): Promise<Pmi2019 | null> {
        return this.pmi2019Repository.findOne({
            where: { no }
        });
    }
}
