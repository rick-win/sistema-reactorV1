import { Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { MinLength, IsNotEmpty, IsEmail } from 'class-validator';
import * as bcrypt from 'bcryptjs';

@Entity()
@Unique(['email_Usuario'])
export class Usuario {
  @PrimaryGeneratedColumn()
  id_Usuario: number;

  @Column()
  @MinLength(4)
  @IsEmail()
  @IsNotEmpty()
  email_Usuario: string;

  @Column()
  @MinLength(8)
  @IsNotEmpty()
  constrasena_Usuario: string;

  @Column()
  @IsNotEmpty()
  rol_Usuario: string;

  @Column()
  @IsNotEmpty()
  nom_Usuario: string;

  @Column()
  @IsNotEmpty()
  ape_Usuario: string;

  @Column()
  @IsNotEmpty()
  tel_Usuario: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  latestUpdate: Date;

  hashPassword():void
  {
    const salt = bcrypt.genSaltSync(10);
    this.constrasena_Usuario = bcrypt.hashSync(this.constrasena_Usuario, salt);
  }

  checkPassword(password):boolean
  {
    return bcrypt.compareSync(password, this.constrasena_Usuario)
  }
}
