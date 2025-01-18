import { Body, Controller, Delete, ParseIntPipe, Post, Query } from '@nestjs/common';
import { TagsService } from './provider/tags.service.service';
import { CreateTagDto } from './dtos/createTags.dto';
import { query } from 'express';
import { identity } from 'rxjs';

@Controller('tags')
export class TagsController {
    constructor(
        public readonly tagService: TagsService
    ) {}

    @Post()
    public createTags(@Body() createTags: CreateTagDto ) {
        return this.tagService.createTag(createTags)
    }
    @Delete()
    public deleteTags(@Query('id', ParseIntPipe) id: number) {
        return this.tagService.deleteTags(id)
    }
    @Delete('soft-delete')
    public async softDelete(@Query('id', ParseIntPipe) id: number) {
        return this.tagService.softDelete(id)
    }
}
