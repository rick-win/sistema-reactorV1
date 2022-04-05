import { Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import {MinLength, IsNotEmpty, IsEmail, isNotEmpty} from 'class-validator';

@Entity()
export class Alarma {

    @PrimaryGeneratedColumn()
    id_Alarma: number;

    @Column()
    REGLA_ALARMA_id_ReglaAlarma: number;

    @Column()
    @IsNotEmpty()
    datetime_Alarma: Date;

    @Column()
    @IsNotEmpty()
    codSensor_Alarma: string ;

}