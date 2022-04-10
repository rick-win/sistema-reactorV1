import { Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import {MinLength, IsNotEmpty, IsEmail, isNotEmpty} from 'class-validator';

@Entity()
export class Control_Produccion {

    @PrimaryGeneratedColumn()
    id_contProduc: number;

    @Column()
    @IsNotEmpty()
    tiempoReporte_contProduc:Date;

    @Column()
    @IsNotEmpty()
    fechaInicio_contProduc:Date;

    @Column()
    @IsNotEmpty()
    fechaFin_contProduc:Date;

    @Column()
    @IsNotEmpty()
    tipoIngreso_contProduc:string;

    @Column()
    @IsNotEmpty()
    cantIngreso_contProduc:number;

    @Column()
    @IsNotEmpty()
    cantLiquido_contProduc:number;

    @Column()
    @IsNotEmpty()
    cantSolido_contProduc:number;

    @Column()
    @IsNotEmpty()
    cantGas_contProduc:number;

    @Column()
    @IsNotEmpty()
    unidadLiquido_contProduc:string;

    @Column()
    @IsNotEmpty()
    unidadSolido_contProduc:string;

    @Column()
    @IsNotEmpty()
    unidadGas_contProduc:string;

    @Column()
    @IsNotEmpty()
    unidadIngreso_contProduc:string;

    @Column()
    @IsNotEmpty()
    tipoSolido_contProduc:string;

    @Column()
    @IsNotEmpty()
    tipoLiquido_contProduc:string;

    @Column()
    @IsNotEmpty()
    tipoGas_contProduc:string;

}