import { Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import {MinLength, IsNotEmpty, IsEmail, isNotEmpty} from 'class-validator';

@Entity()
export class Lectura_Sensor {

    @PrimaryGeneratedColumn()
    id_LecturaSensor: bigint;

    @Column()
    SENSOR_id_Sensor: number;

    @Column()
    @IsNotEmpty()
    datetiime_LecturaSensor: Date;

    @Column()
    @IsNotEmpty()
    codSensor_LecturaSensor: string ;

    @Column()
    @IsNotEmpty()
    medida_LecturaSensor: number;

    @Column()
    @IsNotEmpty()
    modoTornillo_LecturaSensor: boolean;
}