import { forwardRef, Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UserServices } from "./Providers/users.services";
import { AuthModule } from "src/auth/auth.module";
import { User } from "./user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
// import { CreateUserProvider } from './providers/create-user.provider';
import { FindOneByEmail } from './providers/find-one-by-email';
import { CreateUserService } from "./Providers/create-user.provider";
import { HashingProvider } from "src/auth/providers/hashing";
import { BcryptProvider } from "src/auth/providers/bcrypt";

@Module({
    imports: [forwardRef(() => AuthModule), TypeOrmModule.forFeature([User])],
    controllers: [UsersController],
    providers: [UserServices, FindOneByEmail, CreateUserService],
    exports: [UserServices],
})

export class UsersModule {}