import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Catunimed19 } from '../entity/Catunimed19';
import { Repository } from 'typeorm';
import { CreateCatUnimed19Dto } from '../dto/create-catunimed19.dto';
import { UpdateCatUnimed19Dto } from '../dto/update-catunimed19.dto';

@Injectable()
export class Catunimed19Service {
    

    constructor(@InjectRepository(Catunimed19) private catUniMed19Repository: Repository<Catunimed19>) {}

    createcatUniMed19(catUniMed19: CreateCatUnimed19Dto){
        const newCatUniMed19 = this.catUniMed19Repository.create(catUniMed19);
        return this.catUniMed19Repository.save(newCatUniMed19);
    }

    getcatuniMeds19(){
        return this.catUniMed19Repository.find()
    }

    getcatuniMed19(clp: string): Promise<Catunimed19 | null> {
        return this.catUniMed19Repository.findOne({
            where: { clp }
        });
    }

    async deletecatuniMed19(clp: string): Promise<{ message: string }> {
        try {
            const catUniMed19 = await this.catUniMed19Repository.findOne({ where: { clp }});

            if(!catUniMed19) {
                throw new NotFoundException(`No se encontro el registro con clp: ${clp}`)
            }
        await this.catUniMed19Repository.delete({ clp });
        
        return { message: `Registro con clp: ${clp} eliminado exitosamente`};
        } catch(error) {
            throw new InternalServerErrorException(`Error Eliminado el registro: ${error.message}`);
        }
    }

    updatecatUniMed19(clp: string, catUniMed19: UpdateCatUnimed19Dto) {
        return this.catUniMed19Repository.update({clp}, catUniMed19)
    }
}
