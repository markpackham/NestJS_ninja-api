import { Controller, Get } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {

// GET /ninjas -> return an empty array
    @Get()
    getNinjas(){
        return [];
    }


    @Get(':id')
    getOneNinja(){
        return [];
    }
}

