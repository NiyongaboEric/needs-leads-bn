import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserModel {
  @Field()
  user_id: string;

  @Field()
  email: string;

  @Field()
  contact: string;

  @Field()
  address: string;

  @Field()
  fullname: string;

  @Field({ nullable: true })
  picture?: string;

  @Field({ nullable: true })
  about?: string;
}
