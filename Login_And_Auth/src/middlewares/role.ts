import { getRepository } from 'typeorm';
import { Request, Response, NextFunction } from 'express';
import { Usuario } from '../entity/usuario';

export const checkRole = (roles: Array<string>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const {userID} = res.locals.jwtPayload;
    const userRepo = getRepository(Usuario)
    let user: Usuario;

    console.log(res.locals.jwtPayload)
    try {
      user = await userRepo.findOneOrFail(userID)
    }catch (e) {
      return res.status(401).send();
    }

    const {rol_Usuario} = user

    console.log('rol = ',user.rol_Usuario)
    console.log('email = ',user.email_Usuario)

    if (roles.includes(rol_Usuario)){
      next();
    }else {
      res.status(401).json({message: 'Unauthorized'})
    }
  }
}
