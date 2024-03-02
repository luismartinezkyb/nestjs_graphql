import { Injectable } from '@nestjs/common';
import { Post } from './posts.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}
  findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }
}
