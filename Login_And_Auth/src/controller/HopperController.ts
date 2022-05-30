import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Tolva } from "../entity/tolva";
import { validate } from 'class-validator';

export class HopperController {
    static getAll = async (req: Request, res: Response) =>{
        const hopperRepo = getRepository(Tolva);
        try{
            const hoppers = await hopperRepo.find();
            res.send(hoppers);
        }
        catch (e) {
            res.status(404).json({message: 'no records'})
        }
    }

    // static getById = async (req: Request, res: Response) =>{
    //     const {id} = req.params;
    //     const hopperRepo = getRepository(Tolva);
    //     try{
    //         const hopper = await hopperRepo.findOneOrFail({where:{id_Tolva: id}})
    //         res.send(hopper)
    //     }
    //     catch (e) {
    //         res.status(404).json({message: 'Record not found'})
    //     }
    // }

    // static newHopper = async (req: Request, res: Response) =>{
    //     const {lidState, pressure, materialType, materialAmount, chargeTime} = req.body
    //     const hopper = new Tolva();
    //
    //     hopper.estadoTapa_Tolva = lidState;
    //     hopper.indicadorPresion_Tolva = pressure;
    //     hopper.tipoMaterial_Tolva = materialType;
    //     hopper.cantMaterial_Tolva = materialAmount;
    //     hopper.datetimeCargue_Tolva = chargeTime;
    //
    //     //validator
    //     const errors = await validate(hopper, {validationError: { target: false, value: false}});
    //     if(errors.length > 0)
    //     {
    //         return res.status(400).json(errors)
    //
    //     }
    //
    //     //Hash pass
    //
    //     const hopperRepo = getRepository(Tolva);
    //     try{
    //         await hopperRepo.save(hopper);
    //     }
    //     catch (e) {
    //         return res.status(409).json({message: 'hoppername taken'})
    //     }
    //
    //     //Front ans
    //     res.send('hopper created')
    // }

    // static editHopper = async (req: Request, res: Response) =>{
    //     let hopper;
    //     const {id} = req.params;
    //     const {lidState, pressure, materialType, materialAmount, chargeTime} = req.body
    //
    //     const hopperRepo = getRepository(Tolva);
    //     try{
    //         hopper = await hopperRepo.findOneOrFail({where:{id_Tolva: id}})
    //         hopper.estadoTapa_Tolva = lidState;
    //         hopper.indicadorPresion_Tolva = pressure;
    //         hopper.tipoMaterial_Tolva = materialType;
    //         hopper.cantMaterial_Tolva = materialAmount;
    //         hopper.datetimeCargue_Tolva = chargeTime;
    //     }
    //     catch (e) {
    //         return res.status(404).json({message: 'Record not found'})
    //     }
    //
    //     const errors = await validate(Tolva, {validationError: { target: false, value: false}});
    //     if(errors.length > 0){
    //         return res.status(400).json(errors);
    //     }
    //
    //     try{
    //         await hopperRepo.save(hopper)
    //     }
    //     catch (e) {
    //         res.status(409).json({message: 'hopper already exists'})
    //     }
    //
    //     res.status(201).json({message: 'Edit successful'})
    // }
    //
    // static deleteHopper = async (req: Request, res: Response) =>{
    //     const {id} = req.params;
    //     const hopperRepo = getRepository(Tolva);
    //
    //     let hopper: Tolva;
    //
    //     try{
    //         hopper = await hopperRepo.findOneOrFail(id)
    //     }
    //     catch (e) {
    //         return res.status(404).json({message: 'hopper not found'});
    //     }
    //
    //     //remove
    //     await hopperRepo.delete(id);
    //     res.status(201).json({message: 'Deleted'})
    // }
}
