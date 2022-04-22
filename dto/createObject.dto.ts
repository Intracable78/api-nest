import { IsDate, IsNotEmpty, IsNumberString, IsOptional, IsString } from "class-validator";
import { UserEntity } from "../entities/user.entity";

export class CreateObjectDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumberString()
    @IsNotEmpty()
    priceStart: number;

    @IsNotEmpty()
    @IsDate()
    dateEnd: Date;

    @IsNumberString()
    @IsOptional()
    categoryId: number;
    @IsNumberString()
    @IsNotEmpty()
    user: UserEntity;
    @IsNumberString()
    @IsOptional()
    stateId: number;

}