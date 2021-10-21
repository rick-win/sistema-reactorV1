import {Request, Response } from "express";

import pool from "../database";


class UsuariosController{

    public async list (req: Request, res: Response){
       const usuario = await pool.query('SELECT * FROM Usuario');
       res.json(usuario);
    }

    public async getOne(req: Request, res: Response): Promise<any>{
       const { id } = req.params;
       const usuario = await pool.query('SELECT * FROM Usuario WHERE Id_Usuario = ?', [id]);
       if (usuario.length > 0 ){
           return res.json(usuario[0]);
       }
       res.status(404).json({text: 'El usuario no existe'})
    }

    public async create (req: Request , res:Response): Promise<void>{
        console.log('entra a crear');
        await pool.query('INSERT INTO Usuario set ?', [req.body]);
        res.json({message: 'Usuario guardado'});
    }

    public async createRol (req: Request , res:Response): Promise<void>{
     await pool.query('INSERT INTO Rol set ?', [req.body]);
        res.json({message: 'rol guardado'});
     }

    public async createTolva (req: Request , res:Response): Promise<void>{
        try{
            await pool.query('INSERT INTO Tolva set ?', [req.body]);
            res.json({message: 'Tolva guardado'});
        }catch(e){
            console.log(e)
        }
        
    }


    public async update( req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE Usuario set ? WHERE Id_Usuario = ?', [req.body, id]);
        res.json({message: 'El Usuario fue Actualizado'});
    }

    public async delete (req: Request , res:Response): Promise<void>{
        const {id} = req.params;
       await pool.query('DELETE FROM Usuario WHERE Id_Usuario = ?', [id]);
       res.json({message: 'El usuario fue Elimiado'});
    }
}
export const usuariosController = new UsuariosController();