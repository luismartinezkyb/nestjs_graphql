import { Args, ID, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './posts.entity';
import { CreatePostInput } from './dto/create-post.dto';
import { ParseIntPipe } from '@nestjs/common';

@Resolver()
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

  @Mutation(() => Post)
  async createPost(@Args('postInput') post: CreatePostInput) {
    return this.postsService.createPost(post);
  }
}
