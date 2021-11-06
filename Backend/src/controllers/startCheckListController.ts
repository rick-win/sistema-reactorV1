import { Request, Response } from "express";

import pool from "../database";

class StartCheckListController{
    public async hopperLidState (req: Request, res: Response){
        const hopper = await pool.query('select EstadoTapa_Tolva from Tolva order by Id_Tolva desc limit 1');
        res.json({});
    }
}
export const startCheckListController = new StartCheckListController();