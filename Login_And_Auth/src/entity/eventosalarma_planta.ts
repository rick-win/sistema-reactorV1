import { Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import {MinLength, IsNotEmpty, IsEmail, isNotEmpty} from 'class-validator';

@Entity()
export class Lectura_Sensor {

    @PrimaryGeneratedColumn()
    id_EventosAlarmaPlanta: number;

    @Column()
    MAESTROALARMA_PLANTA_cod_MaestroAlarmaPlanta: number;

    @Column()
    @IsNotEmpty()
    codAlarma_EventosAlarmaPlanta:string;

    @Column()
    @IsNotEmpty()
    datetiime_EventosAlarmaPlanta: Date;

}