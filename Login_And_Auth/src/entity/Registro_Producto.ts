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

@Entity()
export class Registro_Producto {

    @PrimaryGeneratedColumn()
    id_regProducto: number;

    @Column()
    @IsNotEmpty()
    cantProducto_regProducto: number;

    @OneToOne(()=> Proceso)
    @JoinColumn()
    procesoID_: Proceso

    @Column()
    @IsNotEmpty()
    tipoProducto_regProducto: string ;

    @Column()
    @IsNotEmpty()
    subProducto_regProducto: string;

    @Column()
    @IsNotEmpty()
    unidadMedida_regProducto: string;

    @Column()
    @IsNotEmpty()
    detalle_regProducto: string;

    @Column()
    @CreateDateColumn()
    deteTime_regProducto: Date;
}