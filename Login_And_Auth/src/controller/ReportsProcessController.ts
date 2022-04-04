import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Usuario } from '../entity/usuario';
import { validate } from 'class-validator';

export class UserController {
    static getAll = async (req: Request, res: Response) =>{
        const userRepo = getRepository(Usuario);
        try{
            const users = await userRepo.find();
            res.send(users);
        }
        catch (e) {
            res.status(404).json({message: 'no users'})
        }
    }

    static getById = async (req: Request, res: Response) =>{
        const {id} = req.params;
        const userRepo = getRepository(Usuario);
        try{
            const user = await userRepo.findOneOrFail({where:{id_Usuario: id}})
            res.send(user)
        }
        catch (e) {
            res.status(404).json({message: 'User not found'})
        }
    }

    static newUser = async (req: Request, res: Response) =>{
        const {username, password, role, phone, name, lastname} = req.body
        const user = new Usuario();

        user.email_Usuario = username;
        user.constrasena_Usuario = password;
        user.rol_Usuario = role;
        user.nom_Usuario = name;
        user.ape_Usuario = lastname;
        user.tel_Usuario = phone;

        //validator
        const errors = await validate(user, {validationError: { target: false, value: false}});
        if(errors.length > 0)
        {
            return res.status(400).json(errors)

        }

        //Hash pass

        const userRepo = getRepository(Usuario);
        try{
            user.hashPassword();
            await userRepo.save(user);
        }
        catch (e) {
            return res.status(409).json({message: 'Username taken'})
        }

        //Front ans
        res.send('User created')
    }

    static editUser = async (req: Request, res: Response) =>{
        let user;
        const {id} = req.params;
        const {username, password, role, phone, name, lastname} = req.body

        const userRepo = getRepository(Usuario);
        try{
            user = await userRepo.findOneOrFail({where:{id_Usuario: id}})
            user.email_Usuario = username;
            user.constrasena_Usuario = password;
            user.rol_Usuario = role;
            user.nom_Usuario = name;
            user.ape_Usuario = lastname;
            user.tel_Usuario = phone;
        }
        catch (e) {
            return res.status(404).json({message: 'User not found'})
        }

        const errors = await validate(Usuario, {validationError: { target: false, value: false}});
        if(errors.length > 0){
            return res.status(400).json(errors);
        }

        try{
            user.hashPassword();
            await userRepo.save(user)
        }
        catch (e) {
            res.status(409).json({message: 'User already exists'})
        }

        res.status(201).json({message: 'Edit successful'})
    }

    static deleteUser = async (req: Request, res: Response) =>{
        const {id} = req.params;
        const userRepo = getRepository(Usuario);

        let user: Usuario;

        try{
            user = await userRepo.findOneOrFail(id)
        }
        catch (e) {
            return res.status(404).json({message: 'User not found'});
        }

        //remove
        await userRepo.delete(id);
        res.status(201).json({message: 'Deleted'})
    }
}

export default UserController;
