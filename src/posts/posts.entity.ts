import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;
  @Column()
  @Field()
  title: string;
  @Column({ type: 'text', nullable: true })
  @Field({ nullable: true })
  content?: string;
}
