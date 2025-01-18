import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class GetPostsDto {
    @IsOptional()
    @IsInt()
    @Type(() => Number)
    id?: Number
}