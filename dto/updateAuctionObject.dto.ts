import { IsDate, IsEmail, IsNotEmpty, IsNumberString, IsOptional, IsString } from "class-validator";
import { ObjectEntity } from "../entities/object.entity";
import { UserEntity } from "../entities/user.entity";

export class updateAuctionObjectDto {

    @IsNotEmpty()
    user: UserEntity;

    @IsNotEmpty()
    object: ObjectEntity;

    @IsNotEmpty()
    @IsString()
    auction_price: number;

    @IsNotEmpty()
    @IsDate()
    auction_date: Date;





}