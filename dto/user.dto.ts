import { IsEmail, IsNotEmpty } from "class-validator";
import { RankEntity } from "../entities/rank.entity";

export class UserDto {
    @IsNotEmpty() id: string;
    @IsNotEmpty() @IsEmail() email: string;
    @IsNotEmpty() rank: RankEntity;
}