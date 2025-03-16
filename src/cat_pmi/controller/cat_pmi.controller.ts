import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateCatPmiDto } from '../dto/create-catpmi.dto';
import { CatPmiService } from '../service/cat_pmi.service';
import { CatPmi } from '../entity/CatPmi';

@Controller('cat-pmi')
export class CatPmiController {

    constructor(private catPmiService: CatPmiService){}
    
    // Creates a new record from the table cat-pmi
    @Post()
    createcatPmi(@Body() newCatPmi: CreateCatPmiDto): Promise<CatPmi>{
        return this.catPmiService.createcatPmi(newCatPmi);
    }
    
    // Gets all the records from the table cat-pmi
    @Get()
    getcatPmis(): Promise<CatPmi[]> {
        return this.catPmiService.getcatPmis();
    }

    // Gets an individual record from the table cat-pmi
    @Get(':clvsi')
    async getcatPmi(@Param('clvsi') clvsi: string): Promise<CatPmi | null> {
        console.log('clvsi');
        console.log(typeof clvsi)
        return this.catPmiService.getcatPmi(clvsi);
    }
}
