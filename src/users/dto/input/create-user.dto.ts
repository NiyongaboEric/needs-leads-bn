import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

@InputType()
export class CreateUserInputDTO {
  @Field()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field()
  @IsNotEmpty()
  contact: string;

  @Field()
  @IsNotEmpty()
  address: string;

  @Field()
  @IsNotEmpty()
  fullname: string;

  @Field({ nullable: true })
  @IsOptional()
  picture?: string;

  @Field({ nullable: true })
  @IsOptional()
  about?: string;
}
