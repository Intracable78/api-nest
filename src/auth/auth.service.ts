import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../../dto/createUser.dto';
import { LoginUserDto } from '../../dto/loginUser.dto';
import { UserDto } from '../../dto/user.dto';
import { JwtPayload } from '../shared/IJwtPayload';
import { RegistrationStatus } from '../shared/IRegistrationStatus';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UserService, private readonly jwtService: JwtService,) { }

    async register(userDto: CreateUserDto): Promise<RegistrationStatus> {
        console.log(userDto);
        let status: RegistrationStatus = {
            success: true,
            message: 'user registered',
        };
        try {
            await this.usersService.createUser(userDto);
        } catch (err) {
            status = {
                success: false,
                message: err,
            };
        }
        return status;
    }


    async login(loginUserDto: LoginUserDto) {
        // find user in db    
        const user = await this.usersService.findByLogin(loginUserDto);

        // generate and sign token    
        const token = this._createToken(user);

        // console.log(this.jwtService.decode(token.accessToken));

        return {
            email: user.email, rank: user.rank, ...token,

        };
    }

    private _createToken({ email, rank }: UserDto): any {
        const user = { email, rank };
        const accessToken = this.jwtService.sign(user);
        // const decodedToken = this.jwtService.decode(accessToken)
        //  console.log(decodedToken)
        return { accessToken };
    }

    async validateUser(payload: JwtPayload): Promise<UserDto> {
        const user = await this.usersService.findByPayload(payload);
        if (!user) {
            throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
        }
        return user;
    }

}
