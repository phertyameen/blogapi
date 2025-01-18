import { Module } from '@nestjs/common';
import { MetaOptionsController } from './meta-options.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaOption } from './meta-options.entity';
import { metaOptionService } from './provider/meta-options.service';

@Module({
    imports: [TypeOrmModule.forFeature([MetaOption])],
    controllers: [MetaOptionsController],
    providers: [metaOptionService]
})
export class MetaOptionsModule {}