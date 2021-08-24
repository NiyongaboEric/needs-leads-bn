import { Query } from '@nestjs/graphql';

export class AppResolver {
  @Query(() => String)
  landingPage(): string {
    return 'Welcome to Needs and Leads';
  }
}
