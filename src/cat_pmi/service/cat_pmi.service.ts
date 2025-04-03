import { HttpException, HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CatPmi } from '../entity/CatPmi';
import { Repository } from 'typeorm';
import { CreateCatPmiDto } from '../dto/create-catpmi.dto';
import { UpdateCatPmiDto } from '../dto/update-catpmi.dto';

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
    
    async deletecatPmi(clvsi: string): Promise<{ message: string }> {
        try {
            const catPmi = await this.catPmiRepository.findOne({ where: { clvsi }});

            if(!catPmi) {
                throw new NotFoundException(`No se encontro el registro con clvsi: ${clvsi}`)
            }
        await this.catPmiRepository.delete({ clvsi });

        return { message: `Registro con  clvsi: ${clvsi} eliminado exitosamente`};
        } catch(error) {
            throw new InternalServerErrorException(`Error Elimnando el registro: ${error.message}`);
        }
    }

    updatecatPmi(clvsi: string, catPmi: UpdateCatPmiDto){
        return this.catPmiRepository.update({clvsi}, catPmi)
    }
}
