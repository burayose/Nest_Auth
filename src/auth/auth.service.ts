import { Injectable } from '@nestjs/common';
import { Authdto } from './auth.dto';

@Injectable()
export class AuthService {
    constructor(){}

    async signup(dto: Authdto){
        const {email,password}= dto;
        return { message:'signup was succefull'};
    }

    async signin(dto:Authdto ){
        const {email,password}=dto;
        return { message:'signin was succefull'};
    }


    async signout(){
        return { message:'signout was succefull'};
    }


}
