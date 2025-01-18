import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, maxLength, Validate, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Column } from "typeorm";

// custum validation to compare passwords

@ValidatorConstraint({ name: "MatchPasswords", async: false })
class MatchPasswordsConstraint implements ValidatorConstraintInterface {
  validate(confirmPassword: string, args: ValidationArguments): boolean {
    const object = args.object as CreateUserDto;
    return confirmPassword === object.password;
  }

  defaultMessage(args: ValidationArguments): string {
    return "Password and confirm password do not match";
  }
}

export class CreateUserDto {
  @ApiProperty({
    type: 'string',
    example: 'Fatima',
    description: 'first name field'
  })
    @IsString()
    @IsNotEmpty()
    @MaxLength(90)
    firstname: string;

    @ApiProperty({
      type: 'string',
      example: 'Aminu',
      description: 'last name field'
    })
    @IsString()
    @IsOptional()
    @MaxLength(90)
    lastname: string;

    @ApiProperty({
      type: 'string',
      example: 'fatima.aminu@mail.com',
      description: 'email field'
    })
    @IsEmail()
    @MaxLength(150)
    @Column({unique: true, length: 150})
    email: string;

    @ApiProperty({
      type: 'string',
      example: '@Password123',
      description: 'password should containg number, alphabets and uppercase'
    })
    @IsString()
    @MaxLength(225)
    @Matches(/^(?=.*[!@#$%^&])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,16}$/, {message: 'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.'})
    password: string;

    @ApiProperty({
      type: 'string',
      example: '@Password123',
      description: 'password should containg number, alphabets and uppercase and should be same as the password'
    })
    @IsString()
    @MaxLength(225)
    @Validate(MatchPasswordsConstraint)
    confirmPassword: string;
}