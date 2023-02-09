import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {

// GET /ninjas -> return an empty array
    @Get()
    getNinjas(){
        return [];
    }


// SHOW /ninjas/1
    @Get(':id')
    getOneNinja(@Param('id') id: string){
        return [];
    }


    @Post()
    createNinja(){
        return {};
    }


    @Put(':id')
    updateNinja(@Param('id') id: string){
        return {};
    }


    @Delete(':id')
    removeNinja(@Param('id') id: string){
        return {};
    }
}

