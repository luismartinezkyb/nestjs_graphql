import { Injectable } from '@nestjs/common';
import { Post } from './entities/posts.entity';

@Injectable()
export class PostsService {
  findAll(): Post[] {
    return [
      {
        id: 22,
        title: 'Hola',
      },
    ];
  }
}
