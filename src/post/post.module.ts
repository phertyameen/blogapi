import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostServices } from './Providers/post.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { MetaOption } from 'src/meta-options/meta-options.entity';
import { TagsModule } from 'src/tags/tags.module';

@Module({
  imports: [UsersModule, TagsModule, TagsModule, TypeOrmModule.forFeature([Post, MetaOption])],
  controllers: [PostController],
  providers: [PostServices],
  exports: [PostServices]
})
export class PostModule {}