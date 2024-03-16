import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { dot } from 'node:test/reporters';
import { Authdto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('singup')
   signup(@Body() dot:Authdto){
    return this.authService.signup(dot);
   }

   @Post('singin')
   signin(@Body() dot:Authdto){
    return this.authService.signin(dot);
   }

   @Get('singout')
   signout(){
    return this.authService.signout();
   }


}
