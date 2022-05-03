import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Proceso } from '../entity/proceso';
import { validate } from 'class-validator';
import { Control_Produccion} from "../entity/control_produccion";
import product from "../routes/product";

export class ReportsProductionController {
    static getAll = async (req: Request, res: Response) =>{
        console.log('Attempting to get Product')
        let ProductionRepo;
        let Production
        try{;
            ProductionRepo = getRepository(Control_Produccion);
            // console.log('Repo = ',ProductRepo)
            Production = await ProductionRepo.find()
            // console.log(Product)
        }
        catch (e) {
            console.log('error = ', e)
            return res.status(404).json({message: 'no Production records'})
            console.log('Repo - ',ProductionRepo)
        }
        return res.send(Production);
    }

    static getById = async (req: Request, res: Response) =>{
        const {id} = req.params;
        const ProductionRepo = getRepository(Control_Produccion);
        try{
            const Production = await ProductionRepo.findOneOrFail({where:{id_contProduction: id}})
            return res.send(Production)
        }
        catch (e) {
            res.status(404).json({message: 'Production record not found'})
        }
    }

    static newProduction = async (req: Request, res: Response) =>{
        console.log('new Production record = ', req.body)
        const {id_contProduction,
            externalProcess,
            fechaInicio_contProduction,
            fechaFin_contProduction,
            tipoIngreso_contProduction,
            cantIngreso_contProduction,
            unidadIngreso_contProduction,
            cantLiquido_contProduction,
            cantSolido_contProduction,
            cantGas_contProduction,
            unidadLiquido_contProduction,
            unidadSolido_contProduction,
            unidadGas_contProduction,
            tipoSolido_contProduction,
            tipoLiquido_contProduction,
            tipoGas_contProduction
        }= req.body
        const Production = new Control_Produccion();

        Production.id_contProduction = id_contProduction;
        Production.externalProcess = externalProcess;
        Production.fechaInicio_contProduction = fechaInicio_contProduction;
        Production.fechaFin_contProduction = fechaFin_contProduction;

        Production.tipoIngreso_contProduction = tipoIngreso_contProduction;
        Production.cantIngreso_contProduction = cantIngreso_contProduction;
        Production.unidadIngreso_contProduction = unidadIngreso_contProduction;

        Production.cantLiquido_contProduction = cantLiquido_contProduction;
        Production.cantSolido_contProduction = cantSolido_contProduction;
        Production.cantGas_contProduction = cantGas_contProduction;

        Production.unidadLiquido_contProduction = unidadLiquido_contProduction;
        Production.unidadSolido_contProduction = unidadSolido_contProduction;
        Production.unidadGas_contProduction = unidadGas_contProduction;

        Production.tipoSolido_contProduction = tipoSolido_contProduction;
        Production.tipoLiquido_contProduction = tipoLiquido_contProduction;
        Production.tipoGas_contProduction = tipoGas_contProduction;

        //validator
        const errors = await validate(Production, {validationError: { target: false, value: false}});
        if(errors.length > 0)
        {
            return res.status(400).json(errors)

        }

        const ProductionRepo = getRepository(Control_Produccion);
        try{
            await ProductionRepo.save(Production);
        }
        catch (e) {
            return res.status(409).json({message: 'Production Name taken'})
        }

        //Front ans
        return res.send('Production created')
    }

    // static editProduction = async (req: Request, res: Response) =>{
    //     let Production;
    //     const {id} = req.params;
    //     const {ProductionName, password, role, phone, name, lastname} = req.body
    //
    //     const ProductionRepo = getRepository(Proceso);
    //     try{
    //         Production = await ProductionRepo.findOneOrFail({where:{id_Proceso: id}})
    //         Production.email_Proceso = ProductionName;
    //         Production.constrasena_Proceso = password;
    //         Production.rol_Proceso = role;
    //         Production.nom_Proceso = name;
    //         Production.ape_Proceso = lastname;
    //         Production.tel_Proceso = phone;
    //     }
    //     catch (e) {
    //         return res.status(404).json({message: 'Production not found'})
    //     }
    //
    //     const errors = await validate(Proceso, {validationError: { target: false, value: false}});
    //     if(errors.length > 0){
    //         return res.status(400).json(errors);
    //     }
    //
    //     try{
    //         Production.hashPassword();
    //         await ProductionRepo.save(Production)
    //     }
    //     catch (e) {
    //         res.status(409).json({message: 'Production already exists'})
    //     }
    //
    //     res.status(201).json({message: 'Edit successful'})
    // }

    static deleteProduction = async (req: Request, res: Response) =>{
        const {id} = req.params;
        const ProductionRepo = getRepository(Control_Produccion);

        let Production: Control_Produccion;

        try{
            Production = await ProductionRepo.findOneOrFail(id)
        }
        catch (e) {
            return res.status(404).json({message: 'Production not found'});
        }

        //remove
        await ProductionRepo.delete(id);
        return res.status(201).json({message: 'Deleted'})
    }
}

export default ReportsProductionController;
