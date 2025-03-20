import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePmi2019Dto } from '../dto/create-pmi2019.dto';
import { Pmi2019 } from '../entity/Pmi2019';
import { Pmi2019Service } from '../service/pmi2019.service';

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
}
