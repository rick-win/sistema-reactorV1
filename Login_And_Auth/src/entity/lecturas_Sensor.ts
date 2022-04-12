import {
    Entity,
    PrimaryGeneratedColumn,
    Unique,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';
import {MinLength, IsNotEmpty, IsEmail, isNotEmpty} from 'class-validator';

@Entity()
export class Lecturas_Sensor {

    @PrimaryGeneratedColumn()
    id_LecturaSensor: number;

    @Column()
    sensor_id_Sensor: number;

    @Column()
    @IsNotEmpty()
    @CreateDateColumn()
    datetime_LecturaSensor: Date;

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