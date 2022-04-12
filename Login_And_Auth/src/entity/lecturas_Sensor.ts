import {
    Entity,
    PrimaryGeneratedColumn,
    Unique,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
} from 'typeorm';
import {MinLength, IsNotEmpty, IsEmail, isNotEmpty} from 'class-validator';
import {Sensor} from "./sensor";
import User from "../routes/user";

@Entity()
export class Lecturas_Sensor {

    @PrimaryGeneratedColumn()
    id_LecturaSensor: number;

    @ManyToOne(() => Sensor, (sensor) => sensor.id_Sensor)
    @JoinColumn()
    @Column()
    sensor_id_Sensor: number;

    @Column()
    @IsNotEmpty()
    @CreateDateColumn()
    datetime_LecturaSensor: Date;

    // @Column()
    // @IsNotEmpty()
    // codSensor_LecturaSensor: string ;

    @Column()
    @IsNotEmpty()
    medida_LecturaSensor: number;

    @Column()
    @IsNotEmpty()
    modoTornillo_LecturaSensor: boolean;
}