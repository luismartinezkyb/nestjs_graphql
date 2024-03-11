import {
  Args,
  ID,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './posts.entity';
import { CreatePostInput } from './dto/create-post.dto';
import { ParseIntPipe } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query(() => [Post])
  async posts(): Promise<Post[]> {
    return this.postsService.findAll();
  }
  @Query(() => Post)
  async getPost(@Args('id', { type: () => ID }) id: string): Promise<Post> {
    return this.postsService.findOne(id);
  }

  @ResolveField((returns) => User)
  async user(@Parent() post: Post): Promise<User> {
    return this.postsService.getUser(post.userId);
  }

  @Mutation(() => Post)
  async createPost(@Args('postInput') post: CreatePostInput) {
    return this.postsService.createPost(post);
  }
}
