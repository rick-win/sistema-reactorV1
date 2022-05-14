import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Proceso } from '../entity/proceso';
import { validate } from 'class-validator';
import { Lecturas_Sensor } from "../entity/lecturas_Sensor";
import product from "../routes/product";
import {Registro_Producto} from "../entity/Registro_Producto";

export class SensorReadingsController {
    static getAll = async (req: Request, res: Response) => {
        console.log('Attempting to get Product')
        let ReadsRepo;
        let Reading
        try {
            ;
            ReadsRepo = getRepository(Lecturas_Sensor);
            // console.log('Repo = ',ProductRepo)
            Reading = await ReadsRepo.find()
            // console.log(Product)
        } catch (e) {
            console.log('error = ', e)
            return res.status(404).json({message: 'no Products'})
            console.log('Repo - ', ReadsRepo)
        }
        return res.send(Reading);
    }
    static getById = async (req: Request, res: Response) =>{
        const {id} = req.params;
        console.log('Searching a specific product with id: ', req.params)
        const ReadRepo = getRepository(Lecturas_Sensor);
        try{
            const Read = await ReadRepo.findOneOrFail({where:{id_LecturaSensor: id}})
            return res.send(Read)
        }
        catch (e) {
            res.status(404).json({message: 'Product not found'})
        }
    }
}
export default SensorReadingsController
