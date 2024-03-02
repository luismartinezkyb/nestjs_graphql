import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field((type) => ID)
  id: number;
  @Field()
  title: string;
  @Field({ nullable: true })
  content?: string;
}
