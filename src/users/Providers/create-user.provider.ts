import { BadRequestException, forwardRef, Inject, Injectable, RequestTimeoutException } from '@nestjs/common';
import { CreateUserDto } from '../dtos/usersDtos/postUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { HashingProvider } from 'src/auth/providers/hashing';

@Injectable()
export class CreateUserService {
    constructor(
        // Inject User Repository
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,

        // Inject Hashing Provider
        @Inject(forwardRef(() => HashingProvider))
        private readonly hashingProvider: HashingProvider
    ) {}

    public async createUser(createUserDto: CreateUserDto): Promise<User> {
        let existingUser;

        try {
            existingUser = await this.userRepository.findOne({
                where: { email: createUserDto.email },
            });
        } catch (error) {
            console.error('Error finding user:', error);
            throw new RequestTimeoutException(
                'Unable to connect to database. Please try again later',
                { description: 'Error connecting to database' }
            );
        }

        if (existingUser) {
            throw new BadRequestException(
                'User already exists in the database. Use a different email'
            );
        }

        const hashedPassword = await this.hashingProvider.hashPassword(createUserDto.password);

        const newUser = this.userRepository.create({
            ...createUserDto,
            password: hashedPassword,
        });

        try {
            return await this.userRepository.save(newUser);
        } catch (error) {
            console.error('Error saving user:', error);
            throw new RequestTimeoutException('Error connecting to the database');
        }
    }
}
