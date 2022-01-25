import {  IsNotEmpty, IsNumberString, IsOptional, IsString } from "class-validator";

export class UpdateObjectDto {

    @IsString()
    @IsOptional()
    name: string;

    @IsNumberString()
    @IsOptional()
    priceStart: number;

    @IsNotEmpty()
    @IsOptional()
    dateEnd: Date;

    @IsNumberString()
    @IsOptional()
    phone: number;

    @IsString()
    @IsOptional()
    address: string;
    @IsString()
    @IsOptional()
    country: string;
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