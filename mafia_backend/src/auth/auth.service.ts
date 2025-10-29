import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

const fakeUsers = [
    {id:1, username: 'user1', password: 'password1'},
    {id:2, username: 'user2', password: 'password2'},
];

@Injectable()
export class AuthService {


    constructor(private jwtService: JwtService){}

    validateUser({username,password}: AuthPayloadDto){
        const findUser = fakeUsers.find((user) => user.username ===username);
        if(!findUser) return null;
        if(findUser.password == password){
            const {password, ...result} = findUser;
            return this.jwtService.sign(result);
        }
        
    }
}
