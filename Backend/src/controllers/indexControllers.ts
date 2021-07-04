import { Request, Response } from "express";


class IndexController{
    public index (req: Request, res: Response){
        res.json({tex:'la API esta en api/usuarios'});
    }
}
export const indexController = new IndexController();
