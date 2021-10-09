import {Request, Response } from "express";

import pool from "../database";


class UsuariosController{

    public async list (req: Request, res: Response){
       const usuario = await pool.query('SELECT * FROM usuario');
       res.json(usuario);
    }

    public async getOne(req: Request, res: Response): Promise<any>{
       const { id } = req.params;
       const usuario = await pool.query('SELECT * FROM usuario WHERE Id_Usuario = ?', [id]);
       if (usuario.length > 0 ){
           return res.json(usuario[0]);
       }
       res.status(404).json({text: 'El usuario no existe'})
    }

    public async create (req: Request , res:Response): Promise<void>{
        await pool.query('INSERT INTO usuario set ?', [req.body]);
        res.json({message: 'Usuario guardado'});
    }

    // public async createRol (req: Request , res:Response): Promise<void>{
    //     await pool.query('INSERT INTO Rol set ?', [req.body]);|
    //     res.json({message: 'Usuario guardado'});
    // }

    public async update( req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE usuario set ? WHERE Id_Usuario = ?', [req.body, id]);
        res.json({message: 'El Usuario fue Actualizado'});
    }

    public async delete (req: Request , res:Response): Promise<void>{
        const {id} = req.params;
       await pool.query('DELETE FROM usuario WHERE Id_Usuario = ?', [id]);
       res.json({message: 'El usuario fue Elimiado'});
    }
}
export const usuariosController = new UsuariosController();