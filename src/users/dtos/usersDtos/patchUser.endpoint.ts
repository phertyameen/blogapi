import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./postUser.dto";

export class PatchUserDto extends PartialType(CreateUserDto) {

}