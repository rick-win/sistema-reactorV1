import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../config/config';

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const token = <string>req.headers['auth'];
  let jwtPayload;

  try{
    jwtPayload = <any>jwt.verify(token, config.jwtSecret)
    res.locals.jwtPayload = jwtPayload;
  } catch (e) {
    return res.status(401).send();
  }

  const { userID, username} = jwtPayload;
  console.log('jwt = ', jwtPayload)

  const newToken = jwt.sign({userID, username}, config.jwtSecret, {expiresIn: '1h'})
  res.setHeader('token', newToken);

  next();
};
