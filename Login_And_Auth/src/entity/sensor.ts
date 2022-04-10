import { Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import {MinLength, IsNotEmpty, IsEmail, isNotEmpty} from 'class-validator';

@Entity()
export class Lectura_Sensor {

    @PrimaryGeneratedColumn()
    id_Sensor: number;

    @Column()
    @IsNotEmpty()
    cod_Sensor: string;

    @Column()
    @IsNotEmpty()
    zona_Sensor: string ;

    @Column()
    @IsNotEmpty()
    unidadMedida_Sensor: string;

    @Column()
    @IsNotEmpty()
    serial_Sensor: string;

    @Column()
    @IsNotEmpty()
    marca_Sensor: string;

    @Column()
    @IsNotEmpty()
    modelo_Sensor: string;

    @Column()
    @IsNotEmpty()
    fechaInstalacion_Sensor: Date;

    @Column()
    @IsNotEmpty()
    fechaBajada_Sensor: Date;

    @Column()
    @IsNotEmpty()
    proposito_Sensor: string;

    @Column()
    @IsNotEmpty()
    tipoOperacionDato_Sensor: Date;
}