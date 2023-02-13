import { Controller, Get, Post, Put, Delete, Param, Query, Body } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {

// GET /ninjas -> return ninjas
// GET /ninjas?weapon=stars -> return a stars ninja
// eg http://localhost:3000/ninjas?weapon=stars
    @Get()
    getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks'){
        const service = new NinjasService();
        return service.getNinjas(weapon);
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

