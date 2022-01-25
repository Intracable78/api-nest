import { IsEmail, IsNumberString, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    lastName: string

    @IsOptional()
    @IsNumberString()
    phone: number;

    @IsOptional()
    @IsString()
    address: string

    @IsOptional()
    @IsString()
    country: string

    @IsOptional()
    @IsString()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsNumberString()
    rankId: number;

    @IsString()
    id: string;

}