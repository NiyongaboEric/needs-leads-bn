import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserModel } from '../models/user.model';
import { UsersService } from '../users.service';
import { CreateUserInputDTO } from '../dto/input/create-user.dto';

@Resolver(() => UserModel)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => UserModel)
  public async createUser(
    @Args('createUserData') createUserData: CreateUserInputDTO,
  ): Promise<UserModel> {
    return this.usersService.createUser(createUserData);
  }
}
