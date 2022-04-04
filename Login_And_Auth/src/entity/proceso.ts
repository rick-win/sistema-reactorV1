import { Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { MinLength, IsNotEmpty } from 'class-validator';

@Entity()
export class Proceso{
    @PrimaryGeneratedColumn()
    id_Proceso: number;

    @Column()
    TOLVA_id_Tolva: number;

    @Column()
    @CreateDateColumn()
    horaReporte_Proceso: Date;

    @Column()
    horaCorrida_Proceso: Date;

    @Column()
    operador_Proceso: string;

    @Column()
    verificarEnergia_Proceso: boolean;

    @Column()
    prod_Data: string;

    @Column()
    success_Proceso: boolean;

    @Column()
    annotations_Proceso: string;
}
