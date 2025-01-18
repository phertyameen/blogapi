import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class GetUsersDto {
    @ApiPropertyOptional({
        description: "Get user with a specific id",
        example: 1234
    })
    @IsOptional()
    @IsInt()
    @Type(() => Number)
    id?: Number 
}