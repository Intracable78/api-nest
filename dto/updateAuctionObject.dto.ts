import { IsEmail, IsNumberString, IsOptional, IsString } from "class-validator";

export class updateAuctionObjectDto {
    @IsOptional()
    @IsString()
    userId: string;

    @IsOptional()
    @IsString()
    auction_price: number;





}