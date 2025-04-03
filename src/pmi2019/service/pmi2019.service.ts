import { Delete, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pmi2019 } from '../entity/Pmi2019';
import { Repository } from 'typeorm';
import { CreatePmi2019Dto } from '../dto/create-pmi2019.dto';
import { UpdatePmi2019 } from '../dto/update-pmi2019.dto';

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

    async deletePmi2019(no: number): Promise<{ message: string }> {
        try {
            const pmi2019 = await this.pmi2019Repository.findOne({ where: { no }});

            if(!pmi2019) {
                throw new NotFoundException(`No se encontro el registro con no: ${no}`)
            }
            await this.pmi2019Repository.delete({ no });

            return { message: `Registro con no: ${no} eliminado exitosamente`};
        } catch(error) {
            throw new InternalServerErrorException(`Error Eliminando el registro: ${error.message}`);
        }
    }

    updatePmi2019(no: number, pmi2019: UpdatePmi2019){
        return this.pmi2019Repository.update({no}, pmi2019)
    }
}
