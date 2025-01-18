import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserServices } from 'src/users/Providers/users.services';
import { SignInDto } from '../dtos/userDto';
import { SignInProvider } from './sign-in.provider';

@Injectable()
export class AuthService {
    
    constructor(
        // injecting user service
        @Inject(forwardRef(() => UserServices))
        private readonly userService: UserServices,

        // inject signInProvider
        private readonly signInProvider: SignInProvider,
    ) {}

    public async SignIn(signInDto: SignInDto) {
        return await this.signInProvider.SignIn(signInDto)
    }

    public isAuth() {
        return true
    }    

}
