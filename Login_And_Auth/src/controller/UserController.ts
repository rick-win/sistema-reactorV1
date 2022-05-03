import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Usuario } from '../entity/usuario';
import { validate } from 'class-validator';

export class UserController {
  static getAll = async (req: Request, res: Response) =>{
    console.log('Attempting to get users ', req.body)
    let userRepo;
    let users
    try{;
      userRepo = getRepository(Usuario);
      users = await userRepo.find()
      console.log(users)
    }
    catch (e) {
      res.status(404).json({message: 'no users'})
    }
    res.send(users);
  }

  static getById = async (req: Request, res: Response) =>{
    console.log('Attempting to get specific user')
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
    console.log('Attempting to create user')
    const {email_Usuario, contrasena_Usuario, rol_Usuario, tel_Usuario, nom_Usuario, ape_Usuario} = req.body
    const user = new Usuario();

    user.email_Usuario = email_Usuario;
    user.constrasena_Usuario = contrasena_Usuario;
    user.rol_Usuario = rol_Usuario;
    user.nom_Usuario = nom_Usuario;
    user.ape_Usuario = ape_Usuario;
    user.tel_Usuario = tel_Usuario;

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
    return res.status(201).json({message: 'User created'})
  }

  static editUser = async (req: Request, res: Response) =>{
    console.log('Attempting to edit user')
    let user;
    const {id} = req.params;
    const {id_Usuario, email_Usuario, contrasena_Usuario, rol_Usuario, tel_Usuario, nom_Usuario, ape_Usuario} = req.body
    console.log('Body', req.body)

    const userRepo = getRepository(Usuario);
    try{
      user = await userRepo.findOneOrFail({where:{id_Usuario: id}})
      if (email_Usuario) {
        user.email_Usuario = email_Usuario
      }else {
        delete user.email_Usuario
      }
      user.constrasena_Usuario = contrasena_Usuario? contrasena_Usuario : user.constrasena_Usuario;
      user.rol_Usuario = rol_Usuario? rol_Usuario : user.rol_Usuario;
      user.nom_Usuario = nom_Usuario? nom_Usuario : user.nom_Usuario;
      user.ape_Usuario = ape_Usuario? ape_Usuario : user.ape_Usuario;
      user.tel_Usuario = tel_Usuario? tel_Usuario : user.tel_Usuario;
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
      return res.status(409).json({message: 'User already exists'})
    }

    console.log('End')
    return res.status(201).json({message: 'Edit successful'})
  }

  static deleteUser = async (req: Request, res: Response) =>{
    console.log('Attempting to delete user')
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
    return res.status(201).json({message: 'Deleted'})
  }
}
export default UserController;
