import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersResolver } from './resolvers/users.resolver';
import { Users as UsersEntity } from './models/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
