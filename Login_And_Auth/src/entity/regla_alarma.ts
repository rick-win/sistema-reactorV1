import { Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import {MinLength, IsNotEmpty, IsEmail, isNotEmpty} from 'class-validator';

// @Entity()
// export class Regla_Alarma {
//
//     @PrimaryGeneratedColumn()
//     id_ReglaAlarma: number;
//
//     @Column()
//     @IsNotEmpty()
//     codSensor_ReglaAlarma: string ;
//
//     @Column()
//     @IsNotEmpty()
//     direccion_ReglaAlarma: string;
//
//     @Column()
//     @IsNotEmpty()
//     estado_ReglaAlarma: boolean;
//
//     @Column()
//     @IsNotEmpty()
//     condicion_ReglaAlarma: string;
// }