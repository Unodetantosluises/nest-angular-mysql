import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CatPmi } from '../entity/CatPmi';
import { Repository } from 'typeorm';
import { CreateCatPmiDto } from '../dto/create-catpmi.dto';

@Injectable()
export class CatPmiService {

    constructor(@InjectRepository(CatPmi) private catPmiRepository: Repository<CatPmi>){}

        createcatPmi(catPmi: CreateCatPmiDto) {
            const newCatPmi = this.catPmiRepository.create(catPmi);
            return this.catPmiRepository.save(newCatPmi);
        }

        getcatPmis() {
            return this.catPmiRepository.find()
        }

        getcatPmi(clvsi: string): Promise<CatPmi | null> {
            return this.catPmiRepository.findOne({
                where: { clvsi }
            });
        }
        
}
