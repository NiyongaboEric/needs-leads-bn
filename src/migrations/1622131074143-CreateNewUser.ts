import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateNewUser1622131074143 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'user_id',
            type: 'uuid',
            isGenerated: true,
            generationStrategy: 'uuid',
            isPrimary: true,
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'contact',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'address',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'fullname',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'picture',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'about',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'date',
            isNullable: false,
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'date',
            isNullable: false,
            default: 'now()',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }
}
