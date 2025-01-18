import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaOptionsModule } from './meta-options/meta-options.module';
import { TagsModule } from './tags/tags.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import { string } from 'joi';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import jwtConfig from './auth/authConfig/jwt.config';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AccessTokenGuard } from './auth/guard/access-token/access-token.guard';
import { AuthGuardGuard } from './auth/guard/auth-guard/auth-guard.guard';
// import enviromentValidation from './config/enviroment.validation';

// use `set NODE_ENV=development && bla bla bla` before starting the applicting 'npm run start:dev' in package.json file
const ENV = process.env.NODE_ENV
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('ENV:', ENV);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: ['.env.development'],
      envFilePath: !ENV ? '.env' : `.env.${ENV.trim()}`,
      load: [appConfig, databaseConfig],
      // validationSchema: enviromentValidation
    }),
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync(jwtConfig.asProvider()),
    UsersModule,
    PostModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('database.host'),
        port: +configService.get('database.port'),
        username: configService.get('database.user'),
        password: configService.get('database.password'),
        database: configService.get('database.name'),
        blog: configService.get('database.blog'),
        synchronize: configService.get('database.synchronize'),
        autoLoadEntities: configService.get('database.autoload')
    })
    }),
    TagsModule,
    MetaOptionsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService, 
    {
      provide: APP_GUARD,
      useClass: AccessTokenGuard,
    },
    AccessTokenGuard,
  ],
})
export class AppModule {}