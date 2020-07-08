import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";
import { query } from "express";

export default class AddAvatarFieldToUsers1594243567285 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('users', new TableColumn({
        name: 'avatar',
        type: 'varchar',
        isNullable: true,
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('users', 'avatar');
    }
}
