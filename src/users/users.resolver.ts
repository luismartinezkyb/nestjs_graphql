import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { Post } from 'src/posts/posts.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }
  @ResolveField((returns) => [Post])
  async posts(@Parent() user: User): Promise<Post[]> {
    return this.usersService.getPosts(user.id);
  }

  @Query(() => User, { name: 'findOneUser' })
  findOne(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }
}
