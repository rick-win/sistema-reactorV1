import { Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import {MinLength, IsNotEmpty, IsEmail, isNotEmpty} from 'class-validator';

@Entity()
export class MaestroAlarma_Planta {

    @PrimaryGeneratedColumn()
    cod_MaestroAlarmaPlanta: number;

    @Column()
    @IsNotEmpty()
    descripcion_MaestroAlarmaPlanta: string;

}