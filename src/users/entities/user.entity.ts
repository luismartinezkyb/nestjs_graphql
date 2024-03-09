import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Post } from 'src/posts/posts.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  // @Field(() => Int, { description: 'Example field (placeholder)' })
  // exampleField: number;
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: string;
  @Column()
  @Field()
  name: string;
  @OneToMany(() => Post, (post) => post.user)
  @Field(() => [Post])
  posts: Post[];
}
