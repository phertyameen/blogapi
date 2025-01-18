import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { postType } from "./enums/postType.enum";
import { postStatus } from "./enums/postSatus.enum";
import { User } from "src/users/user.entity";
import { MetaOption } from "src/meta-options/meta-options.entity";
import { Tag } from "src/tags/tag.entity";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column("simple-array")
    postTitle: string

    @ManyToOne(() => User, (user) => user.posts)
    authur: User

    @Column({ type: 'enum', enum: postType, default: postType.PAGE })
    postType: postType

    @Column({ type: 'enum', enum: postStatus, default: postStatus.DRAFT })
    postStatus: postStatus

    @Column({ type: 'text' })
    content: String

    @Column({ type: 'varchar', length: 255 })
    imageUrl: string

    @Column('timestamp')
    publishedDate: Date

    @OneToOne(() => MetaOption, (metaOptions) => metaOptions.posts, {cascade: true, eager: true})
    metaOptions?: MetaOption

    @ManyToMany(() => Tag, (tag) => tag.post, {eager: true})
    @JoinTable()
    tags: Tag[];
}