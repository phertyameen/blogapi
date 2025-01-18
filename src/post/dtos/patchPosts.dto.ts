import { PartialType } from "@nestjs/mapped-types";
import { CreatePostsDto } from "./postPosts.dto";

export class patchPostsDto extends PartialType(CreatePostsDto) {

}