import 'dotenv/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST } = process.env;

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  username: DB_USERNAME,
  password: DB_PASSWORD,
  port: 5432,
  host: DB_HOST,
  database: DB_NAME,
  autoLoadEntities: true,
  logging: true,
  entities: ['dist/**/*.entity{ .ts,.js}'],
  migrations: ['dist/migrations/**/*.js'],
  migrationsRun: true,
  cli: {
    entitiesDir: 'src/**/*.entity{ .ts,.js}',
    migrationsDir: 'src/migrations',
  },
};
