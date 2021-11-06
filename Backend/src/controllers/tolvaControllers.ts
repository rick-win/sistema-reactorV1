import {Request, Response } from "express";

import pool from "../database";


class TolvaControllers{

    public async listTolva (req: Request, res: Response){
       const tolva = await pool.query('SELECT * FROM Usuario');
       res.json(tolva);
    }

    public async getOneTolva(req: Request, res: Response): Promise<any>{
       const { id } = req.params;
       const tolva = await pool.query('SELECT * FROM Tolva WHERE Id_Usuario = ?', [id]);
       if (tolva.length > 0 ){
           return res.json(tolva[0]);
       }
       res.status(404).json({text: 'Tolva no existe'})
    }

    public async createTolva (req: Request , res:Response): Promise<void>{
        try{
            await pool.query('INSERT INTO Tolva set ?', [req.body]);
            res.json({message: 'Tolva guardado'});
        }catch(e){
            console.log(e)
        }
        
    }

    // public async createRol (req: Request , res:Response): Promise<void>{
    //     await pool.query('INSERT INTO Rol set ?', [req.body]);|
    //     res.json({message: 'Usuario guardado'});
    // }



    public async updateTolva( req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE Usuario set ? WHERE Id_Usuario = ?', [req.body, id]);
        res.json({message: 'El tolva fue Actualizado'});
    }

    public async deleteTolva (req: Request , res:Response): Promise<void>{
        const {id} = req.params;
       await pool.query('DELETE FROM Usuario WHERE Id_Usuario = ?', [id]);
       res.json({message: 'El tolva fue Elimiado'});
    }
}
export const tolvaControllers = new TolvaControllers();