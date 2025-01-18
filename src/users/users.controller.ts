import { Body, Controller, DefaultValuePipe, Get, Headers, Param, ParseIntPipe, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "./dtos/usersDtos/postUser.dto";
import { PatchUserDto } from "./dtos/usersDtos/patchUser.endpoint";
import { UserServices } from "./Providers/users.services";
import { GetUsersDto } from "./dtos/usersDtos/getUser.dto";
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly userServices: UserServices) {}
    @Get('/:id?')
    @ApiOperation({
        summary: 'Fetches the list of registered users on the application'
    })
    @ApiResponse({
        status: 200,
        description: 'Users fethched successfully based on the query'
    })
    @ApiQuery({
        name: 'limit',
        type: 'number',
        required: false,
        description: 'the number of entries returned per query',
        example: 10
    })
    @ApiQuery({
        name: 'page',
        type: 'number',
        required: false,
        description: 'the position of the page number you want to return',
        example: 1
    })

    
    public getUsers(@Param() getUsersDto: GetUsersDto, @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number) {
        return this.userServices.FindAll(getUsersDto, limit, page)
        // return this.userServices.FindOneById(4)
    }
    @Post()
    public postUsers(@Body() createUserDto: CreateUserDto,
    // @Headers() headers: any
) {
        console.log(createUserDto instanceof CreateUserDto)
        // console.log(headers)
        return this.userServices.CreateUser(createUserDto)
    }
    @Patch()
    public patchUser(@Body() patchUserDto: PatchUserDto) {
        return patchUserDto
    }
}