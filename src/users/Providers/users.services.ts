import { BadRequestException, forwardRef, Inject, Injectable, RequestTimeoutException, UnauthorizedException } from "@nestjs/common";
import { GetUsersDto } from "../dtos/usersDtos/getUser.dto";
import { AuthService } from "src/auth/providers/auth.service";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user.entity";
import { DataSource, Repository } from "typeorm";
import { CreateUserDto } from "../dtos/usersDtos/postUser.dto";
import { ConfigService } from "@nestjs/config";
import { HashingProvider } from "src/auth/providers/hashing";
import { FindOneByEmail } from "./find-one-by-email";
import { CreateUserService } from "./create-user.provider";

@Injectable()
export class UserServices {
    constructor(
        // injecting auth service
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService,

        @Inject(forwardRef(() => HashingProvider))
        private readonly hashingProvider: HashingProvider,

        private readonly createUserProvider: CreateUserService,

        // injecting userEntity
        @InjectRepository(User)
        private userRepository: Repository<User>,
        
        // @injecting intra dependency
        // private readonly findOneByEmail: FindOneByEmail,

        // injecting configService
        private readonly configService: ConfigService,

        /* 
        *inject dataSource
        */
        private readonly dataSourse: DataSource
    ) {}

    public FindAll(getUsersDto: GetUsersDto, limit: number, page: number): Promise<User[]> {

        const enviroment = this.configService.get<string>('IS_CONFIG')
        console.log('Current Environment:', process.env.NODE_ENV)
        console.log('IS_CONFIG Value:', enviroment)
        
        return this.userRepository.find()
    }

    public FindOneById(id: number): Promise<User | null> {
        return this.userRepository.findOneBy({id});
    }

    // public async remove(id: number):Promise<void> {
    //     await this.userRepository.delete({id})
    // }

    public async CreateUser(createUserDto: CreateUserDto) {
        return this.createUserProvider.createUser(createUserDto)
    //     let existingUser = undefined

    //     try {
    //         existingUser = await this.userRepository.findOne({
    //         // check if user already exist
    //         where: {email: createUserDto.email}
    //     })
    //     } catch(error) {
    //         throw new RequestTimeoutException('unable to connect to database. Please try again later',
    //             {description: 'error connecting to database'}
    //         )
    //     }
    // // Handle Error
    // if (existingUser){
    //     throw new BadRequestException('User already exist in the database. Use a different email')
    // }

    // let hashedPassword = await this.hashingProvider.hashPassword(createUserDto.password)
    // // Create the user
    // let newUser = this.userRepository.create({...createUserDto, password: hashedPassword})

    // try {
    //     newUser = await this.userRepository.save(newUser)
    // } catch (error) {
    //     throw new RequestTimeoutException('error connecting to the database')
    // }
    // return newUser
    }

    public async GetOneByEmail(email: string) {
        // return this.findOneByEmail.FindOneByEmail(email)
                let user: User | undefined
        
                try {
                // check if user exist in db
                    user = await this.userRepository.findOneBy({email})
                } catch (error) {
                    throw new RequestTimeoutException('Unable to process request at the moment. Please try again later', {
                        description: 'Error connecting to the database',
                        cause: 'possible network error'
                    })
                }
        
                // throw error if user doesn't exist
                if (!user) {
                    throw new UnauthorizedException('User not found')
                }
        
                return user
                // conpare password
    }

    // public async createManyUsers(createUsersDto: CreateUserDto[]) {
    //     const newUsers: User[] = []
    //     // create query runner instance
    //     // const queryRunner = this.dataSourse.createQueryRunner;
    //     const queryRunner = this.dataSourse.createQueryRunner();

    //     // connect query runner to the database
    //     await queryRunner.connect()

    //     // Start transaction
    //     await queryRunner.startTransaction()

    //     try {
    //         // if successful, commit
    //         for (let user of createUsersDto) {
                
    //             let newUser = queryRunner.manager.create(User, user)
    //             let result = await queryRunner.manager.save(newUser)
    //             newUsers.push(result)

    //             await queryRunner.commitTransaction()
    //         }
    //     } catch (error) {
    //         // if unsuccessful, revert/rollback changes
    //         queryRunner.rollbackTransaction()
    //     }   finally {
    //         await queryRunner.release()
    //     }
    //     // release connection
    // }
}