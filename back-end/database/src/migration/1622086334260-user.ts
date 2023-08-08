import { MigrationInterface, QueryRunner, Table} from "typeorm"


export class user1622086334260 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'users',
            columns:[
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true
                },
                {
                    name: 'firstName',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'lastName',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true,
                    isNullable: false
                },
                {
                    name: 'password',
                    type: 'varchar',
                    isNullable: false
                }
            ]

        }))
    }
}