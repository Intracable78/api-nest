import { IsDate, IsNotEmpty, IsNumber, IsNumberString } from "class-validator";

export class CreateAuctionObjectDto {

    @IsNumberString()
    @IsNotEmpty()
    objectId: number;

    @IsNumberString()
    @IsNotEmpty()
    userId: number;

    @IsNumber()
    @IsNotEmpty()
    auction_price: number;

    @IsDate()
    @IsNotEmpty()
    auction_date: Date;

}