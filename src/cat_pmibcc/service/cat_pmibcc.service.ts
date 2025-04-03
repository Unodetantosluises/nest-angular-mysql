import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CatPmibcc } from '../entity/CatPmibcc';
import { Repository } from 'typeorm';
import { CreateCatPmiBccDto } from '../dto/create-catpmibcc.dto';
import { UpdateCatPmiBccDto } from '../dto/update-catpmibcc.dto';

@Injectable()
export class CatPmibccService {
    
    constructor(@InjectRepository(CatPmibcc) private catPmiBccRepository: Repository<CatPmibcc>){}

    createCatPmiBcc(catPmibcc: CreateCatPmiBccDto){
        const newCatPmiBcc = this.catPmiBccRepository.create(catPmibcc);
        return this.catPmiBccRepository.save(newCatPmiBcc);
    }

    getcatpmiBccs(){
        return this.catPmiBccRepository.find()
    }
    
    getcatpmiBcc(clvsi: string):Promise<CatPmibcc | null> {
        return this.catPmiBccRepository.findOne({
            where: { clvsi }
        });
    }

    deletecatpmiBcc(clvsi: string) {
        return this.catPmiBccRepository.delete({ clvsi })
    }

    updatecatpmiBcc(clvsi: string, catpmiBcc: UpdateCatPmiBccDto){
        return this.catPmiBccRepository.update({ clvsi }, catpmiBcc)
    }
}
