import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Post } from 'src/posts/posts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Post])],
  exports: [TypeOrmModule, UsersService],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
