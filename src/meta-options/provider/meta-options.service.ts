import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MetaOption } from "../meta-options.entity";
import { CreatePostMetaOptionsDto } from "src/post/dtos/meta-optionsDto";

@Injectable()
export class metaOptionService {
    constructor(
        // injecting the metaoption entity
        @InjectRepository(MetaOption)
        private readonly metaRepository: Repository<MetaOption>
    ) {}

    public async createMetaOptions(createMetaOptions: CreatePostMetaOptionsDto) {
        const metaOption = this.metaRepository.create(createMetaOptions)

        return await this.metaRepository.save(metaOption)
    }
}