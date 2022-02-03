import { IsDate, IsNotEmpty, IsNumberString, IsOptional, IsString } from "class-validator";

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
    userId: number;
    @IsNumberString()
    @IsOptional()
    stateId: number;

}