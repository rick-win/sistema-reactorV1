import { Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import {MinLength, IsNotEmpty, IsEmail, isNotEmpty} from 'class-validator';

@Entity()
export class Registro_Producto {

    @PrimaryGeneratedColumn()
    id_regProducto: number;

    @Column()
    @IsNotEmpty()
    cantProducto_regProducto: number;

    @Column()
    @IsNotEmpty()
    tipoProducto_regProducto: string ;

    @Column()
    @IsNotEmpty()
    subProducto_regProducto: string;

    @Column()
    @IsNotEmpty()
    unidadMedida_regProducto: string;

    @Column()
    @IsNotEmpty()
    detalle_regProducto: string;

    @Column()
    @IsNotEmpty()
    detetime_regProducto: Date;
}