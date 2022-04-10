import { Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import {MinLength, IsNotEmpty, IsEmail, isNotEmpty} from 'class-validator';

@Entity()
export class Catalizador {

    @PrimaryGeneratedColumn()
    id_Catalizador: number;

    @Column()
    TOLVA_id_Tolva:number;

    @Column()
    @IsNotEmpty()
    tipo_Catalizador:string;

    @Column()
    @IsNotEmpty()
    cant_Catalizador:number ;

    @Column()
    @IsNotEmpty()
    unidadMedida_Catalizador: number;
}