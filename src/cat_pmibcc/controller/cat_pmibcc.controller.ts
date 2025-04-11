import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CatPmibccService } from '../service/cat_pmibcc.service';
import { CreateCatPmiBccDto } from '../dto/create-catpmibcc.dto';
import { CatPmibcc } from '../entity/CatPmibcc';
import { UpdateCatPmiBccDto } from '../dto/update-catpmibcc.dto';

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
    async getcatpmiBcc(@Param('clvsi') clvsi: string) {
        return await this.catPmiBccService.getcatpmiBcc(clvsi);
    }

    // Deletes a record from the table cat-pmibcc
    @Delete(':clvsi')
    deletecatpmiBcc(@Param('clvsi') clvsi: string) {
        console.log('clvsi');
        return this.catPmiBccService.deletecatpmiBcc(clvsi);
    }

    // Updates a record from the table cat-pmibcc
    @Patch(':clvsi')
    updatecatpmiBcc(@Param('clvsi') clvsi: string, @Body() CatPmibcc: UpdateCatPmiBccDto) {
        return this.catPmiBccService.updatecatpmiBcc(clvsi, CatPmibcc);
    }
}
