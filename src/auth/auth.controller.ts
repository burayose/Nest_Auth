import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('singup')
   signup(){
    return this.authService.signup();
   }

   @Post('singin')
   signin(){
    return this.authService.signin();
   }

   @Get('singout')
   signout(){
    return this.authService.signout();
   }


}
