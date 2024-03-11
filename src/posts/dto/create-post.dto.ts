import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreatePostInput {
  @MaxLength(10, {
    message: 'Title too short',
  })
  @IsString()
  @IsNotEmpty()
  @Field()
  title: string;
  @IsString()
  @IsOptional()
  @Field({ nullable: true })
  content?: string;
  @Field()
  @IsString()
  @IsNotEmpty()
  userId: string;
}
