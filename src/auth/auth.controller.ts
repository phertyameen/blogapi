import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './providers/auth.service';
import { UserServices } from 'src/users/Providers/users.services';
import { SignInDto } from './dtos/userDto';

@Controller('auth')
export class AuthController {
    constructor(
        // injecting auth service
        private readonly authservice: AuthService,
    ) {}
    @Post('/signIn')
    @HttpCode(HttpStatus.OK)
    public async SignIn(@Body() signInDto: SignInDto) {
       return await this.authservice.SignIn(signInDto)
    }
}