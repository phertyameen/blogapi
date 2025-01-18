import { BadRequestException, Body, Injectable, RequestTimeoutException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Post } from "../post.entity";
import { CreatePostsDto } from "../dtos/postPosts.dto";
// import { MetaOption } from "src/meta-options/meta-options.entity";
import { UserServices } from "src/users/Providers/users.services";
import { TagsService } from "src/tags/provider/tags.service.service";
import { patchPostsDto } from "../dtos/patchPosts.dto";

@Injectable()
export class PostServices {
    // public findAllPosts(getPostsDto: GetPostsDto, users: {}) {
    //     return [
    //     {
    //         id: '1',
    //         users: users,
    //         postTitle: 'Post 1',
    //         body: 'This returns the body content of post 1',
    //         likes: 2,
    //         date: 2000-12-27
    //     },
    //     {
    //         id: '2',
    //         users: users,
    //         postTitle: 'Post 1',
    //         body: 'This returns the body content of post 1',
    //         likes: 9,
    //         date: 2011-1-10
    //     },
    //     {
    //         id: '3',
    //         users: users,
    //         postTitle: 'Post 1',
    //         body: 'This returns the body content of post 1',
    //         likes: 5,
    //         date: 2003-5-9
    //     }]
    // }
    
    constructor(
        // injecting userService
        private readonly userService: UserServices,

        // injecting tagsService
        private readonly tagservice: TagsService,
       
//  // injecting metaOptions entity
//         @InjectRepository(MetaOption)
//         public readonly metaOptionsRepository: Repository<MetaOption>,

        // injecting post entity
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>

    ) {}

    public async createPost(@Body() createPosts: CreatePostsDto) {
    //     const extinguisher = await this.postRepository.exists({
    //         // check if post date
    //     where: {publishedDate: createPosts.publishedDate}
    // })

    //     let newPost = this.postRepository.create(createPosts)
    //     newPost =  await this.postRepository.save(newPost)
    //     return newPost
    // }

    // create metaoptions Dto
    // const metaOptions = createPosts.metaOptions ? this.metaOptionsRepository.create(createPosts.metaOptions) : null

    // if (metaOptions) {
    //     await this.metaOptionsRepository.save(metaOptions)
    // }

    // create post
    
    const authur = await this.userService.FindOneById(createPosts.authurId)

    const tags = await this.tagservice.findMultipleTags(createPosts.tags)
    const post = this.postRepository.create({
        ...createPosts,
        authur: authur,
        tags
    })
    
    // // Add metaoptions to the post
    // if (metaOptions) {
    //     post.metaOptions = metaOptions
    // }

    //  Return the post to the body 
    return await this.postRepository.save(post)
    }

    public async getAllPosts(): Promise<Post[]> {
        try {
            console.log('loading posts...')
            return await this.postRepository.find();
        } catch (error) {
            console.error("Error fetching posts:", error);
            throw new RequestTimeoutException("Unable to fetch posts");
        }
    }    

    public async deletePost(id: number) {
        // // using unidirectional relationship
        // // find post and metaOption of the post you want to delete
        // let post = await this.postRepository.findOneBy({id})
        
        // delete the post
        await this.postRepository.delete(id)

        // // delete the metaOption,
        // await this.metaOptionsRepository.delete(post.metaOptions.id)

        // // confirmation
        return {delete: true, id}


        // // using bidirectional relationship
        // // // find post and metaOption of the post you want to delete
        // const post = await this.postRepository.findOneBy({id})
        
        // let inversePost = await this.metaOptionsRepository.find({
        //     where: { id: post.metaOptions.id },
        //     relations: { posts: true }
        // })

        // console.log(inversePost)

        // return {delete: true, id}
    }

    public async updatePost(patchPosts: patchPostsDto) {
        let tags = undefined
        let post = undefined

        // Find the tag
        try {
            tags = await this.tagservice.findMultipleTags(patchPosts.tags)
        } catch (error) {
            throw new RequestTimeoutException('unable to process your request. please try again later')
        }

        // number of tags need to be equal
        if (!tags || tags.length !== patchPosts.tags.length) {
            throw new BadRequestException('check your tags id and make sure they are correct')
        }

        // Find the exixting post
        try {
            post = await this.postRepository.findOneBy({
            id: patchPosts.id
        })
        } catch (error) {
            throw new RequestTimeoutException('unable to process your request. please try again later')
        }

        if (!post) {
            throw new RequestTimeoutException('post id not found')
        }
        
        // update the post
        post.postTitle = patchPosts.postTitle ?? post.postTitle
        post.postStatus = patchPosts.postStatus ?? patchPosts.postStatus
        post.postType = patchPosts.postType ?? post.postType
        post.content = patchPosts.content ?? post.content
        post.imageUrl = patchPosts.imageUrl ?? post.imageUrl
        post.publishedDate = patchPosts.publishedDate ?? post.publishedDate

        // Asign new tags
        post.tags = tags

        // save the post
        try {
            this.postRepository.save(post)
        } catch (error) {
            throw new RequestTimeoutException('unable to process your request. please try again later')
        }
        return post
    }
}