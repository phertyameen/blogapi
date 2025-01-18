import { Type } from "class-transformer"
import { IsArray, IsEmpty, IsEnum, IsInt, IsISO8601, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength, ValidateNested } from "class-validator"
import { postType } from "../enums/postType.enum"
import { postStatus } from "../enums/postSatus.enum"
import { CreateUserDto } from "src/users/dtos/usersDtos/postUser.dto"
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { CreatePostMetaOptionsDto } from "./meta-optionsDto"
import { ManyToMany } from "typeorm"

export class CreatePostsDto {
    @ApiProperty({
        example: 1,
        description: "this contains id of a post"
    })
    @IsOptional()
    @IsInt()
    @Type(() => Number)
    id?: number

    // @IsArray()
    // @IsString({ each: true })
    // users: []

    // IsArray()
    // @ValidateNested({ each: true }) // Validate each item in the array
    // @Type(() => UserDto) // Transform each array item into a UserDto instance (create UserDto)
    // users: UserDto[];

    @ApiPropertyOptional({
        example: "Post Title 1",
        description: "This is a post title"
})
    @IsString()
    @MinLength(4)
    @MaxLength(98)
    postTitle: string

    // @ApiPropertyOptional({
    //     type: CreateUserDto,
    //     required: false,
    // })
    // @IsEnum(CreateUserDto)
    // @IsOptional()
    // @Type(() => CreateUserDto)
    // authur: CreateUserDto


    @ApiPropertyOptional({
        enum: postType,
        description: "post must be a story, post, series or page"
    })
    @IsEnum(postType)
    @IsOptional()
    postType: postType

    @ApiProperty({
        enum: postStatus,
        description: "post must be a draft, review, published or scheduled"
    })
    @IsEnum(postStatus)
    postStatus: postStatus

    @ApiProperty({
    example: "this is the main body of the post",
    description: "this contains the main body of the post"
    })
    @IsString()
    @IsNotEmpty()
    content: String

    @ApiProperty({
        example: "https://image_url",
        description: "a link to image if available"
    })
    @IsNotEmpty()
    imageUrl: string

    @IsISO8601()
    publishedDate: Date

    @ApiPropertyOptional({
        type: 'array',
        required: true,
        example: ["#java", "#php"],
})

    // @ApiPropertyOptional({
    //     type: 'object',
    //     required: false,
    //     items: {
    //       type: 'object',
    //       properties: {
    //         metavalue: {
    //           type: 'json',
    //           description: 'The metaValue is a JSON string',
    //           example: '{"sidebarEnabled": true,}',
    //         },
    //       },
    //     },
    //   })
    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => CreatePostMetaOptionsDto)
    metaOptions?: CreatePostMetaOptionsDto | null;

    @ApiProperty({
        type: 'integer',
        required: true,
        example: 1
    })
    @IsInt()
    @IsNotEmpty()
    authurId: number; 

    @IsArray()
    @IsOptional()
    @IsInt({each: true})
    tags: number[]
}