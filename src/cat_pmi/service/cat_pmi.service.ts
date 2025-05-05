import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CatPmi } from '../entity/CatPmi';
import { QueryFailedError, Repository } from 'typeorm';
import { CreateCatPmiDto } from '../dto/create-catpmi.dto';
import { UpdateCatPmiDto } from '../dto/update-catpmi.dto';

@Injectable()
export class CatPmiService {

    constructor(@InjectRepository(CatPmi) private catPmiRepository: Repository<CatPmi>){}
    
    async createcatPmi(catPmi: CreateCatPmiDto) {
        try {
            const newCatPmi = this.catPmiRepository.create(catPmi);
            const savedCatPmi = await this.catPmiRepository.save(newCatPmi);

            return {
                status: 'success',
                message: 'Registro creado exitosamente',
                data: savedCatPmi,
            };
        } catch (error) {
            throw new InternalServerErrorException('Error al crear el registro');
        }   
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

    async getcatPmi(clvsi: string): Promise<{ status: string; message: string; data: CatPmi | null }> {
        const catPmi = await this.catPmiRepository.findOne({ where: { clvsi } });
      
        if (!catPmi) {
          throw new NotFoundException(`No se encontro el registro con clvsi: ${clvsi}`);
        }
      
        return {
          status: 'success',
          message: `Registro con clvsi: ${clvsi} encontrado`,
          data: catPmi,
        };
    }
    
    async deletecatPmi(clvsi: string): Promise<{ status: string, message: string, data: CatPmi }> {
        try{
            const catPmi = await this.catPmiRepository.findOne({ where: { clvsi }});
            
            if(!catPmi) {
            throw new NotFoundException(`No se encontro el registro con clvsi: ${clvsi}`);
        }
        
        await this.catPmiRepository.remove(catPmi);
        
        return {
            status: 'success',
            message: `Registro con clvsi: ${clvsi} eliminado`,
            data: catPmi,
        };
    } catch (error) {
        if(error instanceof QueryFailedError) {
            throw new BadRequestException(`Error en la base de datos: ${error.message}`)
        }
        throw new InternalServerErrorException(`Error eliminando el registro con clvsi:${clvsi}`);
    }
    }

    async updatecatPmi(clvsi: string, updateCatPmi: UpdateCatPmiDto): Promise<{ status: string; message: string; data: CatPmi | null; }> {
        try {
          const catPmi = await this.catPmiRepository.findOne({ where: { clvsi } });
      
          if (!catPmi) {
            throw new NotFoundException(`No se encontró un registro con clvsi: ${clvsi}`);
          }
      
          await this.catPmiRepository.update({ clvsi }, updateCatPmi);
      
          const updatedRecord = await this.catPmiRepository.findOne({ where: { clvsi } });
      
          return {
            status: 'success',
            message: `Registro con clvsi: ${clvsi} actualizado exitosamente`,
            data: updatedRecord,
          };
        } catch (error) {
          if (error instanceof QueryFailedError) {
            throw new BadRequestException(`Error en la base de datos: ${error.message}`);
          }
          throw new InternalServerErrorException(`Error actualizando el registro con clvsi: ${clvsi}`);
        }
      }     
}
