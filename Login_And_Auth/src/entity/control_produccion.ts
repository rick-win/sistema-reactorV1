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
export class Control_Produccion {

    @PrimaryGeneratedColumn()
    id_contProduction: number;

    @Column({ name: 'process_ID'} )
    externalProcess: number

    @OneToOne(()=> Proceso)
    @JoinColumn({ name: 'process_ID'})
    procesoID: Proceso

    @Column()
    @CreateDateColumn()
    tiempoReporte_contProduction:Date;

    @Column()
    @IsNotEmpty()
    fechaInicio_contProduction:Date;

    @Column()
    @IsNotEmpty()
    fechaFin_contProduction:Date;

    @Column()
    @IsNotEmpty()
    tipoIngreso_contProduction:string;

    @Column()
    @IsNotEmpty()
    cantIngreso_contProduction:number;

    @Column()
    @IsNotEmpty()
    unidadIngreso_contProduction:string;

    @Column()
    @IsNotEmpty()
    cantLiquido_contProduction:number;

    @Column()
    @IsNotEmpty()
    cantSolido_contProduction:number;

    @Column()
    @IsNotEmpty()
    cantGas_contProduction:number;

    @Column()
    @IsNotEmpty()
    unidadLiquido_contProduction:string;

    @Column()
    @IsNotEmpty()
    unidadSolido_contProduction:string;

    @Column()
    @IsNotEmpty()
    unidadGas_contProduction:string;

    @Column()
    @IsNotEmpty()
    tipoSolido_contProduction:string;

    @Column()
    @IsNotEmpty()
    tipoLiquido_contProduction:string;

    @Column()
    @IsNotEmpty()
    tipoGas_contProduction:string;

    @Column()
    labID: number;

    @Column()
    labDesc: string;

}
