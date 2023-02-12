import { Injectable } from '@nestjs/common';

// The Providers that live in services are for business logic (like the Model in MVC)
@Injectable()
export class NinjasService {
    private ninjas = [
        {id: 0, name: 'ninjaA', weapon: 'stars'},
        {id: 1, name: 'ninjaB', weapon: 'nunchucks'},
    ];

    getNinjas(weapon?: 'stars' | 'nunchucks') {
        if(weapon){
            return this.ninjas.filter((ninja) => ninja.weapon === weapon);
        }
        return this.ninjas;
    }
}
