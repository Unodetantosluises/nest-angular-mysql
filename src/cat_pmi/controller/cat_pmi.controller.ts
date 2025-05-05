import { Body, Controller, Delete, Get, HttpCode, HttpStatus, InternalServerErrorException, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { CreateCatPmiDto } from '../dto/create-catpmi.dto';
import { CatPmiService } from '../service/cat_pmi.service';
import { CatPmi } from '../entity/CatPmi';
import { UpdateCatPmiDto } from '../dto/update-catpmi.dto';

@Controller('cat-pmi')
export class CatPmiController {

    constructor(private catPmiService: CatPmiService){}
    
    // Creates a new record for the table cat-pmi
    @Post()
    async createcatPmi(@Body() newCatPmi: CreateCatPmiDto) {
        return this.catPmiService.createcatPmi(newCatPmi);
    }
    
    // Gets all the records from the table cat-pmi
    @Get()
    async getcatPmis(): Promise<CatPmi[]> {
        try {
            return await this.catPmiService.getcatPmis();
        } catch(error) {
            if(error instanceof NotFoundException) {
                throw new NotFoundException(error.message);
            }
            throw new InternalServerErrorException('Ocurrio un error en el servidor');
        }
    }

    // Gets an individual record from the table cat-pmi
    @Get(':clvsi')
    async getcatPmi(@Param('clvsi') clvsi: string) {
        return await this.catPmiService.getcatPmi(clvsi);
    }

    // Deletes a record from the table cat-pmi
    @Delete(':clvsi')
    async deletecatPmi(@Param('clvsi') clvsi: string) {
        return await this.catPmiService.deletecatPmi(clvsi);
    }

    // Updates a record from the table cat-pmi
    @Patch(':clvsi')
    updatecatPmi(@Param('clvsi') clvsi: string, @Body() CatPmi: UpdateCatPmiDto){
        return this.catPmiService.updatecatPmi(clvsi, CatPmi);
    }
}
