import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { CreatePmi2019Dto } from '../dto/create-pmi2019.dto';
import { Pmi2019 } from '../entity/Pmi2019';
import { Pmi2019Service } from '../service/pmi2019.service';
import { UpdatePmi2019 } from '../dto/update-pmi2019.dto';

@Controller('pmi2019')
export class Pmi2019Controller {

    constructor(private pmi2019Service: Pmi2019Service){}

    // Creates a new record for the table pmi2019
    @Post()
    createPmi2019(@Body() newPmi2019: CreatePmi2019Dto): Promise<Pmi2019> {
        return this.pmi2019Service.createPmi2019(newPmi2019);
    }
    
    // Gets all the records from the table pmi2019
    @Get()
    getPmis2019(): Promise<Pmi2019[]> {
        return this.pmi2019Service.getPmis2019();
    }
    
    // Gets an individual record from the table pmi2019
    @Get(':no')
    async getPmi2019(@Param('no') no:number): Promise<Pmi2019 | null> {
        console.log('no')
        console.log(typeof no)
        return this.pmi2019Service.getPmi2019(no);
    }

    // Deletes a record from the table pmi2019
    @Delete(':no')
    @HttpCode(HttpStatus.OK) // 200 succesfull deletion
    deletePmi2019(@Param('no') no: number) {
        console.log('no');
        return this.pmi2019Service.deletePmi2019(no);
    }

    // Updates a record from the table pmi2019
    @Patch(':no')
    updatePmi2019(@Param('no') no: number, @Body() Pmi2019: UpdatePmi2019){
        return this.pmi2019Service.updatePmi2019(no, Pmi2019);
    }
}
