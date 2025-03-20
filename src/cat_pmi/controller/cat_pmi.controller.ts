import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateCatPmiDto } from '../dto/create-catpmi.dto';
import { CatPmiService } from '../service/cat_pmi.service';
import { CatPmi } from '../entity/CatPmi';
import { UpdateCatPmiDto } from '../dto/update-catpmi.dto';

@Controller('cat-pmi')
export class CatPmiController {

    constructor(private catPmiService: CatPmiService){}
    
    // Creates a new record for the table cat-pmi
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

    @Delete(':clvsi')
    deletecatPmi(@Param('clvsi') clvsi: string) {
        console.log('clvsi');
        return this.catPmiService.deletecatPmi(clvsi);
    }

    @Patch(':clvsi')
    updatecatPmi(@Param('clvsi') clvsi: string, @Body() CatPmi: UpdateCatPmiDto){
            return this.catPmiService.updatecatPmi(clvsi, CatPmi);
        }
}
