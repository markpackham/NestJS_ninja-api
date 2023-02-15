import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

// Guards can be attached to either entire controllers or individual methods in the controller
// They can then implement restrictions so a ninja can't do something 
// unless they have a specific martial arts belt
@Injectable()
export class BeltGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    // demo of an autherization usecase
    // get the request
    // const request = context.switchToHttp().getRequest();
    // validate request
    // const hasBlackBelt = request.user.belts.includes('black');
    // write some check if user has the desired belt and return false if this fails

    // "return true" is the default
    return true;
  }
}


// result of being rejected by a guard
/*
    "statusCode": 403,
    "message": "Forbidden resource",
    "error": "Forbidden"
*/