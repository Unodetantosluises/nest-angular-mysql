import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CatPmibccService } from '../service/cat_pmibcc.service';
import { CreateCatPmiBccDto } from '../dto/create-catpmibcc.dto';
import { CatPmibcc } from '../entity/CatPmibcc';

@Controller('cat-pmibcc')
export class CatPmibccController {

    constructor(private catPmiBccService: CatPmibccService){}

    // Creates a new record for the table cat-pmibcc
    @Post()
    createcatPmiBcc(@Body() newCatPmiBcc: CreateCatPmiBccDto): Promise<CatPmibcc>{
        return this.catPmiBccService.createCatPmiBcc(newCatPmiBcc);
    }

    // Gets all the records from the table cat-pmibcc
    @Get()
    getcatpmiBccs(): Promise<CatPmibcc[]> {
        return this.catPmiBccService.getcatpmiBccs();
    }

    // Gets an individual record from the table cat-pmibcc
    @Get(':clvsi')
    async getcatpmiBcc(@Param('clvsi') clvsi: string): Promise<CatPmibcc | null> {
        console.log('clvsi');
        console.log(typeof clvsi)
        return this.catPmiBccService.getcatpmiBcc(clvsi);
    }
}
