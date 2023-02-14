import { MinLength, IsEnum } from "class-validator";

export class CreateNinjaDto {
    @MinLength(3)
    name: string;

    @IsEnum(['stars', 'nunchucks'], {message: 'You can only chose stars OR nunchucks!'})
    weapon: 'stars' | 'nunchucks';
}
