import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

import Orphanage from './Orphanage';

@Entity('images')
export default class Image {
     
     @PrimaryGeneratedColumn('increment')
     id: number;

     @Column()
     path: string;

     // Não precisamos colocar aqui o campo do relacionamento 
          // Na tabela origem (no caso Orphanages), podemos usar o OneToMany e ManyToOne
     
     @ManyToOne(() => Orphanage, orphanage => orphanage.images)
     @JoinColumn({ name: 'orphanage_id'})
     orphanage: Orphanage;
}