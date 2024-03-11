import { Injectable } from '@nestjs/common';
import { Post } from './posts.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostInput } from './dto/create-post.dto';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
    private readonly userService: UsersService,
  ) {}
  async findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }
  async createPost(post: CreatePostInput): Promise<Post> {
    const newPost = this.postRepository.create(post);
    await this.postRepository.save(newPost);
    return newPost;
  }

  async findOne(id: string): Promise<Post> {
    const product = await this.postRepository.findOne({
      where: {
        id,
      },
    });
    return product;
  }
  async getUser(userId: string): Promise<User> {
    return this.userService.findOne(userId);
  }
}
