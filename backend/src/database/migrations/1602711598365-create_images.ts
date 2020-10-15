import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602711598365 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
                {
                    name: 'id',   
                    type: 'integer',  
                    unsigned: true, 
                    isPrimary: true,  
                    isGenerated: true,
                    generationStrategy: 'increment',  
                },
                {
                    name: 'path',
                    type: 'varchar'
                },
                {
                    name: 'orphanage_id',
                    type: 'integer'
                }
            ],
            // Config Chaves Estrangeiras
            foreignKeys: [
                {
                    name: 'ImageOrphanage', // nome Chave Estrangeira
                    columnNames: ['orphanage_id'],  // Coluna na tabela que é a FK
                    referencedTableName : 'orphanages', // Tabela que ela referencia
                    referencedColumnNames: ['id'],   // Nome do campo na tabela de origem
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }                
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }

}
