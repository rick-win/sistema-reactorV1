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
import {MinLength, IsNotEmpty, IsEmail, isNotEmpty} from 'class-validator';
import {Proceso} from "./proceso";
import {ClientRequest} from "http";

@Entity()
export class Registro_Producto {

    @PrimaryGeneratedColumn()
    id_regProducto: number;

    @Column()
    @IsNotEmpty()
    cantProducto_regProducto: number;

    @Column({ name: 'process_ID'})
    parentProcess: number;

    @OneToOne(()=> Proceso)
    @JoinColumn({name: 'process_ID'})
    procesoID_: Proceso

    @Column()
    @IsNotEmpty()
    tipoProducto_regProducto: string ;

    @Column()
    @IsNotEmpty()
    catalizador: boolean;

    @Column()
    catalizador_Cant: number;

    @Column()
    catalizador_Med: string;

    // @Column()
    // @IsNotEmpty()
    // subProducto_regProducto: string;

    @Column()
    @IsNotEmpty()
    unidadMedida_regProducto: string;

    // @Column()
    // @IsNotEmpty()
    // detalle_regProducto: string;

    @Column()
    @CreateDateColumn()
    deteTime_regProducto: Date;
}
