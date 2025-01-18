import { forwardRef, Inject, Injectable, RequestTimeoutException, UnauthorizedException } from '@nestjs/common';
// import { Inject } from '@nestjs/typeorm';
import { UserServices } from 'src/users/Providers/users.services';
import { SignInDto } from '../dtos/userDto';
import { HashingProvider } from './hashing';
import { JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import jwtConfig from '../authConfig/jwt.config';

@Injectable()
export class SignInProvider {
    constructor(
        // injecting userService repo
        @Inject(forwardRef(() => UserServices))
        private readonly userService: UserServices,

        // injecting hashing dependency
        private readonly hashingProvider: HashingProvider,

        // inject jwt service
        private readonly jwtService: JwtService, 

        // inject jwt
        @Inject(jwtConfig.KEY)
        private readonly jwtConfiguration: ConfigType<typeof jwtConfig>
    ){}
    public async SignIn(signInDto: SignInDto) {
        // check if user exist in db
        // throw error if user doesnt exist
        let user = await this.userService.GetOneByEmail(signInDto.email)

        // conpare password
        let isCheckedPassword: boolean = false

        try {
            isCheckedPassword = await this.hashingProvider.comparePasswords(signInDto.password, (await user).password)
        } catch (error) {
            throw new RequestTimeoutException(error, {
                description: 'error  connecting to the database'
            })
        }

        if (!isCheckedPassword) {
            throw new UnauthorizedException('email or password is incorrect')
        }
 
        const accssToken = await this.jwtService.signAsync({
            sub: user.id,
            email: user.email
        }, {
            audience: this.jwtConfiguration.audience,
            issuer: this.jwtConfiguration.issuer,
            expiresIn: this.jwtConfiguration.ttl
        })

        // login
        return { accssToken }
    }
}
