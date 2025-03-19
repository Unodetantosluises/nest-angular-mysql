import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Catunimed19Service } from '../service/catunimed19.service';
import { CreateCatUnimed19Dto } from '../dto/create-catunimed19.dto';
import { Catunimed19 } from '../entity/Catunimed19';

@Controller('catunimed19')
export class Catunimed19Controller {

    constructor(private catUniMed19Service: Catunimed19Service){}

    // Creates a new record for the table catunimed19
    @Post()
    createcatUniMed19(@Body() newCatUniMed19: CreateCatUnimed19Dto): Promise<Catunimed19>{
        return this.catUniMed19Service.createcatUniMed19(newCatUniMed19);
    }

    // Get all the records from the table catunmied19
    @Get()
    getcatUniMeds19(): Promise<Catunimed19[]> {
        return this.catUniMed19Service.getcatuniMeds19();
    }

    // Gets an individual record from the table catunimed19
    @Get(':clp')
    async getcatUniMed19(@Param('clp') clp:string): Promise<Catunimed19 | null> {
        console.log('clp')
        console.log(typeof clp)
        return this.catUniMed19Service.getcatuniMed19(clp);
    }

}
