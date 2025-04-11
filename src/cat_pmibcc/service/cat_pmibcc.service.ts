import { Injectable, NotFoundException } from '@nestjs/common';
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
    
    async getcatpmiBcc(clvsi: string):Promise<{ stautus: string; message: string; data: CatPmibcc | null}> {
        const catPmiBcc = await this.catPmiBccRepository.findOne({ where: { clvsi } });

        if(!catPmiBcc) {
            throw new NotFoundException(`No se encontro registro con clvsi: ${clvsi} `);
        }

        return {
            stautus: 'success',
            message: `Registro con clvsi: ${clvsi} encontrado`,
            data: catPmiBcc,
        };
    }

    deletecatpmiBcc(clvsi: string) {
        return this.catPmiBccRepository.delete({ clvsi })
    }

    updatecatpmiBcc(clvsi: string, catpmiBcc: UpdateCatPmiBccDto){
        return this.catPmiBccRepository.update({ clvsi }, catpmiBcc)
    }
}
