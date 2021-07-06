import {Request, Response } from "express";

import pool from "../database";


class SensorFichaTecController{

    public async list (req: Request, res: Response){
       const sensor = await pool.query('SELECT * FROM  sensor');
       res.json(sensor);
    }

    public async getOne(req: Request, res: Response): Promise<any>{
       const { id } = req.params;
       const sensor = await pool.query('SELECT * FROM sensor WHERE Id_Sensor = ?', [id]);
       if (sensor.length > 0 ){
           return res.json(sensor[0]);
       }
       res.status(404).json({text: 'El sensor no existe'})
    }

    public async create (req: Request , res:Response): Promise<void>{
        await pool.query('INSERT INTO sensor set ?', [req.body]);
        res.json({message: 'Sensor Guardado'});
    }

    public async update( req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE sensor set ? WHERE Id_Sensor = ?', [req.body, id]);
        res.json({message: 'El Sensor fue Actualizado'});
    }

    public async delete (req: Request , res:Response): Promise<void>{
        const {id} = req.params;
       await pool.query('DELETE FROM sensor WHERE Id_Sensor = ?', [id]);
       res.json({message: 'El sensor fue Elimiado'});
    }
}
export const sensorFichaTecController = new SensorFichaTecController();