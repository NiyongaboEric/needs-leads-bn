import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users as UsersEntity } from './models/user.entity';
import { CreateUserInputDTO } from './dto/input/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {}

  public async createUser(
    createUserData: CreateUserInputDTO,
  ): Promise<UsersEntity> {
    const results = await this.usersRepository.save(createUserData);
    return results;
  }
}
