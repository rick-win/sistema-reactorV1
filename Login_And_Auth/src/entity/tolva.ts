import { Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import {MinLength, IsNotEmpty, IsEmail, isNotEmpty} from 'class-validator';

@Entity()
export class Tolva {

    @PrimaryGeneratedColumn()
    id_Tolva: number;

    @Column()
    @IsNotEmpty()
    estadoTapa_Tolva:boolean;

    @Column()
    @IsNotEmpty()
    indicadorPresion_Tolva:number;

    @Column()
    @IsNotEmpty()
    tipoMaterial_Tolva: string;

    @Column()
    @IsNotEmpty()
    cantMaterial_Tolva: number;

    @Column()
    @IsNotEmpty()
    datetimeCargue_Tolva: Date;

    @Column()
    @CreateDateColumn()
    horaReporte_Tolva: Date;
}