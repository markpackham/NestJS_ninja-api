import { Controller, Get, Post, Put, Delete, Param, Query, Body } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {

    // Nest instantiates the classes for us
    // behind the scenes it's doing something like this,
    // const controller = new NinjasController();
    constructor(private readonly ninjasService: NinjasService){}

// GET /ninjas -> return ninjas
// GET /ninjas?weapon=stars -> return a stars ninja
// eg http://localhost:3000/ninjas?weapon=stars
    @Get()
    getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks'){
        // use the contructor instead of having to create a new instance every single time
        // Nest does the following for us so we don't need to bother once we have a constructor
        //const service = new NinjasService();

        // No longer needs to be done, we can us "this"
        //return service.getNinjas(weapon);
        return this.ninjasService.getNinjas(weapon);
    }


// SHOW /ninjas/1
    @Get(':id')
    getOneNinja(@Param('id') id: string){
        return {
            id,
        };
    }


    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto){
        return {
            name: createNinjaDto.name,
        };
    }


    @Put(':id')
    updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto){
        return {
            id,
            name: updateNinjaDto.name,
        };
    }


    @Delete(':id')
    removeNinja(@Param('id') id: string){
        return {};
    }
}

