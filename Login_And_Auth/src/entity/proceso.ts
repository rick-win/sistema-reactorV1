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
export class Proceso{
    @PrimaryGeneratedColumn()
    id_Proceso: number;

    // @OneToOne(() => Tolva)
    // @JoinColumn()
    // tolva_id_Tolva: number;

    @Column()
    @CreateDateColumn()
    horaReporte_Proceso: Date;

    @Column()
    horaCorrida_Proceso: Date;

    @Column()
    verificarCierre_Proceso: Boolean;

    @Column()
    operador_Proceso: string;

    @Column()
    verificarEnergia_Proceso: boolean;

    @Column()
    prod_Data: string;

    @Column()
    success_Proceso: boolean;

    @Column()
    annotations_Proceso: string;
}
