import { Injectable } from '@nestjs/common';
import { CreateTagDto } from '../dtos/createTags.dto';
import { In, Repository } from 'typeorm';
import { Tag } from '../tag.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TagsService {

    constructor(
        // injecting tag repository
        @InjectRepository(Tag)
        public readonly tagRepository: Repository<Tag>
    ) {}

    public async createTag(createTag: CreateTagDto) {
        const tags = this.tagRepository.create(createTag)
        return await this.tagRepository.save(tags)
    }

    public async findMultipleTags(tags: number[]) {
        const result = this.tagRepository.find({
            where: { id: In(tags) },
          });
      
          return result;
    }

    public async deleteTags(id: number) {
        const tag = await this.tagRepository.findOne({
            where: {id}
        })

        if (!tag) {
            throw new Error(`id of ${id} was not found`)
        }

        await this.tagRepository.delete(id)

        return `${tag.name} tag was deleted`
    }
    public async softDelete(id: number) {
        const tag = await this.tagRepository.findOne({
            where: {id}
        })

        if (!tag) {
            throw new Error(`tag of id ${id} doesn't exist`)
        }

        await this.tagRepository.softDelete(id)
        return `${tag.name} tag has been softly removed`
    }
}