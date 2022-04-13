import { UserDto } from "../../dto/user.dto";
import { UserEntity } from "../../entities/user.entity";

export const toUserDto = (data: UserEntity): UserDto => {
    console.log(data)
    const { id, email, rank } = data;
    let userDto: UserDto = { id, email, rank };
    return userDto;
};