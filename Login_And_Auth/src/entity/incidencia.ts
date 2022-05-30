import {
    Entity,
    PrimaryGeneratedColumn,
    Unique,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn
} from 'typeorm';
import { MinLength, IsNotEmpty } from 'class-validator';
import {Tolva} from "./tolva";

@Entity()
export class Incidencia{
    @PrimaryGeneratedColumn()
    id_Incidencia: number;

    // @OneToOne(() => Tolva)
    // @JoinColumn()
    // tolva_id_Tolva: number;

    @Column()
    @CreateDateColumn()
    horaReporte_Incidencia: Date;

    @Column()
    operario_Incidencia: string;

    @Column()
    incidente_Incidencia: string;

    @Column()
    zona_Incidencia: string;

    @Column()
    desc_Incidencia: string;

    @Column()
    resuelto_Incidencia: boolean;

    @Column()
    annotations_Incidencia: string;
}
