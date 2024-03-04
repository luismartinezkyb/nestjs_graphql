import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './posts.entity';
import { CreatePostInput } from './dto/create-post.dto';

@Resolver()
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query(() => [Post])
  async posts(): Promise<Post[]> {
    return this.postsService.findAll();
  }

  @Mutation(() => Post)
  async createPost(@Args('postInput') post: CreatePostInput) {
    return this.postsService.createPost(post);
  }
}
