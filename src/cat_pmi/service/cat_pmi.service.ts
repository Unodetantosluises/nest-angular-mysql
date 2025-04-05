import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CatPmi } from '../entity/CatPmi';
import { QueryFailedError, Repository } from 'typeorm';
import { CreateCatPmiDto } from '../dto/create-catpmi.dto';
import { UpdateCatPmiDto } from '../dto/update-catpmi.dto';

@Injectable()
export class CatPmiService {

    constructor(@InjectRepository(CatPmi) private catPmiRepository: Repository<CatPmi>){}
    
    createcatPmi(catPmi: CreateCatPmiDto) {
        const newCatPmi = this.catPmiRepository.create(catPmi);
        return this.catPmiRepository.save(newCatPmi);
    }

    async getcatPmis(): Promise<CatPmi[]> {
        try {
            const catPmis = await this.catPmiRepository.find();

            if(catPmis.length === 0) {
                throw new NotFoundException('No hay registros en la base de datos');
            }
            return catPmis;
        } catch(error) {
            throw new InternalServerErrorException(
                `Error obteniendo los registros: ${error.message}`,
            );
        }
    }

    async getcatPmi(clvsi: string): Promise<CatPmi> {
        try {
            const catPmi = await this.catPmiRepository.findOne({ where: { clvsi }});

            if(!catPmi) {
                throw new NotFoundException(`No hay registros en la base de datos con clvsi: ${clvsi}`);
            }
            return catPmi;
        } catch(error) {
            throw new InternalServerErrorException(
                `Error obteniendo los registro: ${error.message}`,
            );
        }
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

    async updatecatPmi(clvsi: string, updateCatPmi: UpdateCatPmiDto): Promise<{ message: string }> {
        try {
            // Search record if it exits 
            const existingRecord = await this.catPmiRepository.findOne({ where: { clvsi } });
    
            if (!existingRecord) {
                throw new NotFoundException(`No se encontró un registro con clvsi: ${clvsi}`);
            }
    
            // Update record
            await this.catPmiRepository.update({ clvsi }, updateCatPmi);
    
            return { message: `Registro con clvsi: ${clvsi} actualizado exitosamente` };
        } catch (error) {
            if (error instanceof QueryFailedError) {
                throw new BadRequestException(`Error en la base de datos: ${error.message}`);
            }
            throw new InternalServerErrorException(`Error actualizando el registro con clvsi: ${clvsi}`);
        }
        
    }    
}
