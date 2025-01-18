import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { PostServices } from './Providers/post.service';
import { GetPostsDto } from './dtos/getPosts.dto';
import { UserServices } from 'src/users/Providers/users.services';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostsDto } from './dtos/postPosts.dto';
import { patchPostsDto } from './dtos/patchPosts.dto';

@ApiTags()
@Controller('posts')
export class PostController {
    constructor(
        // injecting post service
        private readonly postSerices: PostServices,
        // injecting users service
        private readonly userServices: UserServices
    ) {}

    @Get('/:id?')
    public getPosts(@Param() getPostsDto: GetPostsDto) {

        // Find the user data
        // const user = this.userServices.FindOneById(6)
        const allPosts = this.postSerices.getAllPosts()

        // Pass the post data to PostServices and return
        return allPosts
    }
    @ApiOperation({
        summary: 'this creates your posts'
    })
    @ApiResponse({
        status: 200,
        description: 'You\'ll get a 200 response status if your request is successfull'
    })
    @Post()
    public postPosts(@Body() createPosts: CreatePostsDto) {
        return this.postSerices.createPost(createPosts)
    }
    @Patch()
    public patchPosts(@Body() patchPosts: patchPostsDto) {
        return this.postSerices.updatePost(patchPosts)
    }
    @Delete()
    public deletePost(@Query('id', ParseIntPipe) id:number) {
        return this.postSerices.deletePost(id)
    }
}