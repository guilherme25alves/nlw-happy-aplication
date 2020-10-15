import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';

import Image from './Image';

@Entity('orphanages')
export default class Orphanage {
     
     @PrimaryGeneratedColumn('increment')
     id: number;

     @Column()
     name: string;

     @Column()
     latitude: number;

     @Column()
     longitude: number;

     @Column()
     about: string;

     @Column()
     instructions: string;

     @Column()
     opening_hours: string;

     @Column()
     open_on_weekends: boolean;

     // Recebe uma function que retorna o tipo, e outra com o campo do relacionamento na outra classe
     @OneToMany(() => Image, image => image.orphanage, {
          cascade: ['insert', 'update']
     }) 
     // coluna que armazena relacionamento
     @JoinColumn({ name: 'orphanage_id'})
     images: Image[]; // Não adicionamos @Column => estamos apenas mapeando relacionamento, esse campo não tem no banco, nessa tabela

}