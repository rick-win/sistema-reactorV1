import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Proceso } from '../entity/proceso';
import { validate } from 'class-validator';

export class ReportsController {
    static getAll = async (req: Request, res: Response) =>{
        console.log('Attempting to get process')
        let processRepo;
        let process
        try{;
            processRepo = getRepository(Proceso);
            console.log('Repo = ',processRepo)
            process = await processRepo.find()
            console.log(process)
        }
        catch (e) {
            console.log('error = ', e)
            return res.status(404).json({message: 'no processes'})
            console.log('Repo - ',processRepo)
        }
        res.send(process);
    }

    static getById = async (req: Request, res: Response) =>{
        const {id} = req.params;
        const processRepo = getRepository(Proceso);
        try{
            const process = await processRepo.findOneOrFail({where:{id_Proceso: id}})
            res.send(process)
        }
        catch (e) {
            res.status(404).json({message: 'process not found'})
        }
    }

    static newProcess = async (req: Request, res: Response) =>{
        console.log('new process = ', req.body)
        const {horaCorrida_Proceso, verificarCierre_Proceso, operador_Proceso, verificarEnergia_Proceso, prod_Data, success_proceso, annotations_Proceso} = req.body
        const process = new Proceso();

        process.horaCorrida_Proceso = horaCorrida_Proceso;
        process.operador_Proceso = operador_Proceso;
        process.verificarEnergia_Proceso = verificarEnergia_Proceso;
        process.verificarCierre_Proceso = verificarCierre_Proceso
        process.prod_Data = prod_Data;
        process.success_Proceso = success_proceso;
        process.annotations_Proceso = annotations_Proceso;

        console.log('proceso = ', process)

        //validator
        const errors = await validate(process, {validationError: { target: false, value: false}});
        if(errors.length > 0)
        {
            return res.status(400).json(errors)

        }

        //Hash pass

        const processRepo = getRepository(Proceso);
        try{
            await processRepo.save(process);
        }
        catch (e) {
            return res.status(409).json({message: 'processname taken'})
        }

        //Front ans
        res.send('process created')
    }

    // static editProcess = async (req: Request, res: Response) =>{
    //     let process;
    //     const {id} = req.params;
    //     const {processname, password, role, phone, name, lastname} = req.body
    //
    //     const processRepo = getRepository(Proceso);
    //     try{
    //         process = await processRepo.findOneOrFail({where:{id_Proceso: id}})
    //         process.email_Proceso = processname;
    //         process.constrasena_Proceso = password;
    //         process.rol_Proceso = role;
    //         process.nom_Proceso = name;
    //         process.ape_Proceso = lastname;
    //         process.tel_Proceso = phone;
    //     }
    //     catch (e) {
    //         return res.status(404).json({message: 'process not found'})
    //     }
    //
    //     const errors = await validate(Proceso, {validationError: { target: false, value: false}});
    //     if(errors.length > 0){
    //         return res.status(400).json(errors);
    //     }
    //
    //     try{
    //         process.hashPassword();
    //         await processRepo.save(process)
    //     }
    //     catch (e) {
    //         res.status(409).json({message: 'process already exists'})
    //     }
    //
    //     res.status(201).json({message: 'Edit successful'})
    // }

    static deleteProcess = async (req: Request, res: Response) =>{
        const {id} = req.params;
        const processRepo = getRepository(Proceso);

        let process: Proceso;

        try{
            process = await processRepo.findOneOrFail(id)
        }
        catch (e) {
            return res.status(404).json({message: 'process not found'});
        }

        //remove
        await processRepo.delete(id);
        res.status(201).json({message: 'Deleted'})
    }
}

export default ReportsController;
