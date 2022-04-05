import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Usuario } from '../entity/usuario';
import * as jwt from 'jsonwebtoken';
import config from '../config/config';
import { validate } from 'class-validator';
import user from "../routes/user";

class AuthController {

  static login = async (req: Request, res: Response) => {

    const {email, password} = req.body;
    if (! (email && password)){
      return res.status(400).json({message: 'All fields required'})
    }
    const userRepo = getRepository(Usuario)
    let users: Usuario;

    try{
      users = await userRepo.findOneOrFail({where:{email_Usuario: email}})
    }
    catch (e) {
      return res.status(400).json({message:'User or password incorrect'})
    }

    //Auth
    if(!users.checkPassword(password))
    {
      return res.status(400).json({message:'User or password incorrect'})
    }

    const token = jwt.sign({userID: users.id_Usuario, username: users.email_Usuario}, config.jwtSecret, {expiresIn: '1h'})

    res.json({message: 'Success', token, userID: users.id_Usuario, username: users.email_Usuario, role: users.rol_Usuario, name: users.nom_Usuario, last: users.ape_Usuario, phone: users.tel_Usuario})
  }
}
export default AuthController;
