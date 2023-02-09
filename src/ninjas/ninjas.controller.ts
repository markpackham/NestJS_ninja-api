import { Controller, Get, Post, Put, Delete, Param, Query } from '@nestjs/common';

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
    createNinja(){
        return {};
    }


    @Put(':id')
    updateNinja(@Param('id') id: string){
        return {
            id,
        };
    }


    @Delete(':id')
    removeNinja(@Param('id') id: string){
        return {};
    }
}

