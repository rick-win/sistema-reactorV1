import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Incidencia } from "../entity/incidencia";
import { validate } from 'class-validator';

export class IncidentController {
    static getAll = async (req: Request, res: Response) =>{
        console.log('Attempting to get incidents')
        let IncidentRepo;
        let Incident
        try{;
            IncidentRepo = getRepository(Incidencia);
            console.log('Repo = ',IncidentRepo)
            Incident = await IncidentRepo.find()
            console.log(Incident)
        }
        catch (e) {
            console.log('error = ', e)
            return res.status(404).json({message: 'no Incidentes'})
            console.log('Repo - ',IncidentRepo)
        }
        res.send(Incident);
    }

    static getById = async (req: Request, res: Response) =>{
        const {id} = req.params;
        const IncidentRepo = getRepository(Incidencia);
        try{
            const Incident = await IncidentRepo.findOneOrFail({where:{id_Incidencia: id}})
            res.send(Incident)
        }
        catch (e) {
            res.status(404).json({message: 'Incident not found'})
        }
    }

    static newIncident = async (req: Request, res: Response) =>{
        console.log('new Incident = ', req.body)
        const {horaReporte_Incidencia,
            operario_Incidencia,
            incidente_Incidencia,
            zona_Incidencia,
            desc_Incidencia,
            resuelto_Incidencia,
            annotations_Incidencia} = req.body
        const Incident = new Incidencia();

        Incident.horaReporte_Incidencia = horaReporte_Incidencia;
        Incident.operario_Incidencia = operario_Incidencia;
        Incident.incidente_Incidencia = incidente_Incidencia;
        Incident.zona_Incidencia = zona_Incidencia;
        Incident.desc_Incidencia = desc_Incidencia;
        Incident.resuelto_Incidencia = resuelto_Incidencia;
        Incident.annotations_Incidencia = annotations_Incidencia;

        console.log('Incidencia = ', Incident)

        //validator
        const errors = await validate(Incident, {validationError: { target: false, value: false}});
        if(errors.length > 0)
        {
            return res.status(400).json(errors)

        }

        //Hash pass

        const IncidentRepo = getRepository(Incidencia);
        try{
            await IncidentRepo.save(Incident);
        }
        catch (e) {
            return res.status(409).json({message: 'Incident id taken'})
        }

        //Front ans
        res.send('Incident created')
    }

    // static editIncident = async (req: Request, res: Response) =>{
    //     let Incident;
    //     const {id} = req.params;
    //     const {Incidentname, password, role, phone, name, lastname} = req.body
    //
    //     const IncidentRepo = getRepository(Incidencia);
    //     try{
    //         Incident = await IncidentRepo.findOneOrFail({where:{id_Incidencia: id}})
    //         Incident.email_Incidencia = Incidentname;
    //         Incident.constrasena_Incidencia = password;
    //         Incident.rol_Incidencia = role;
    //         Incident.nom_Incidencia = name;
    //         Incident.ape_Incidencia = lastname;
    //         Incident.tel_Incidencia = phone;
    //     }
    //     catch (e) {
    //         return res.status(404).json({message: 'Incident not found'})
    //     }
    //
    //     const errors = await validate(Incidencia, {validationError: { target: false, value: false}});
    //     if(errors.length > 0){
    //         return res.status(400).json(errors);
    //     }
    //
    //     try{
    //         Incident.hashPassword();
    //         await IncidentRepo.save(Incident)
    //     }
    //     catch (e) {
    //         res.status(409).json({message: 'Incident already exists'})
    //     }
    //
    //     res.status(201).json({message: 'Edit successful'})
    // }

    static deleteIncident = async (req: Request, res: Response) =>{
        const {id} = req.params;
        const IncidentRepo = getRepository(Incidencia);

        let Incident: Incidencia;

        try{
            Incident = await IncidentRepo.findOneOrFail(id)
        }
        catch (e) {
            return res.status(404).json({message: 'Incident not found'});
        }

        //remove
        await IncidentRepo.delete(id);
        res.status(201).json({message: 'Deleted'})
    }
}

export default IncidentController;
