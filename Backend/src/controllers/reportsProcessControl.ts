import {Request, Response } from "express";

import pool from "../database";
import reportsFailureRoutes from "../routes/reportsFailureRoutes";

class ReportsProcessController {
    public async list (req: Request, res: Response){
        const product = await pool.query('SELECT * FROM Reporte_Proceso');
        res.json(product);
    }

    public async getOne(req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const product = await pool.query('SELECT * FROM Reporte_Proceso WHERE id_reprt_procso = ?', [id]);
        if (product.length > 0 ){
            return res.json(product[0]);
        }
        res.status(404).json({text: 'El reporte de producto buscado no existe'})
    }

    public async create (req: Request , res:Response): Promise<void>{
        await pool.query('INSERT INTO usuario set ?', [req.body]);
        res.json({message: 'Usuario guardado'});
    }

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
export const processController = new ReportsProcessController();