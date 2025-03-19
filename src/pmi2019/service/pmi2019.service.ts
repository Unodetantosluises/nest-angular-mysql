import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pmi2019 } from '../entity/Pmi2019';
import { Repository } from 'typeorm';
import { CreateCatPmi2019Dto } from '../dto/create-catpmi2019.dto';

@Injectable()
export class Pmi2019Service {
    constructor(@InjectRepository(Pmi2019) private pmi2019Repository: Repository<Pmi2019>) {}

    createPmi2019(pmi2019: CreateCatPmi2019Dto) {
        const new
    }
}
