import { Controller, Get, Post, Put, Delete, Param, Query, Body } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {

// GET /ninjas -> return ninjas
// GET /ninjas?type=fast -> return a fast ninja
// eg http://localhost:3000/ninjas?type=fast
    @Get()
    getNinjas(@Query('type') type: string){
        return [{type}];
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

