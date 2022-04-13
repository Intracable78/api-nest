import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDto } from '../../dto/createUser.dto';
import { LoginUserDto } from '../../dto/loginUser.dto';
import { RegistrationStatus } from '../shared/IRegistrationStatus';
import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {
    constructor(private readonly authService:
        AuthService) { }

    @Post('register')
    public async register(@Body() createUserDto: CreateUserDto,): Promise<RegistrationStatus> {
        // console.log(createUserDto)
        const result:
            RegistrationStatus = await this.authService.register(createUserDto,);
        if (!result.success) {
            throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
        }
        return result;
    }

    @Post('login')
    public async login(@Body() loginUserDto: LoginUserDto) {
        return await this.authService.login(loginUserDto);
    }


}
