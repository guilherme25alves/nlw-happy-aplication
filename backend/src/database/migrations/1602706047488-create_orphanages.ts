import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602706047488 implements MigrationInterface {

    // Efetuar alterações no banco (Criar, deletar, alterar tabela, campo )
    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: 'orphanages',
            columns: [
                {
                    name: 'id',   // nome do campo
                    type: 'integer',  // tipo
                    unsigned: true, // valor positivo
                    isPrimary: true,  // primary_key
                    isGenerated: true, // gerado automaticamente
                    generationStrategy: 'increment',  // gerado de forma incremental (+1)
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,  // nums antes da vírgula
                    precision: 2, // nums depois da vírgula
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'about',
                    type: 'text',
                },
                {
                    name: 'instructions',
                    type: 'text',
                },
                {
                    name: 'opening_hours',
                    type: 'varchar',
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false,  // Definindo um valor default, caso o mesmo não seja preenchido
                }
            ]
        }))
    }

    // Como se fosse um rollback do método UP, vai desfazer o que foi feito no UP
    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('orphanages');
    }

}
