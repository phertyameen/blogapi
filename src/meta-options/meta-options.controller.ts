import { Body, Controller, Post } from '@nestjs/common';
import { CreatePostMetaOptionsDto } from 'src/post/dtos/meta-optionsDto';
import { metaOptionService } from './provider/meta-options.service';

@Controller('meta-options')
export class MetaOptionsController {
    constructor(
        private readonly metaOptionsService: metaOptionService
    ) {}
    @Post() 
    public metaOptions(@Body() metaOptionsDto: CreatePostMetaOptionsDto) {
        return this.metaOptionsService.createMetaOptions(metaOptionsDto)
    } 
}