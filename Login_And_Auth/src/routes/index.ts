import { Router } from 'express';
import auth from './auth';
import user from './user';
import hopper from "./hopper";
import proceso from "./process";
import product from "./product";
import production from "./production";
import sensorReadings from "./sensorReadings";
import incidents from "./incidents";

const routes = Router();

routes.use('/auth', auth);
routes.use('/process', proceso)
routes.use('/product', product)
routes.use('/production', production)
routes.use('/users', user);
routes.use('/hopper', hopper)
routes.use('/sensorRead', sensorReadings)
routes.use('/incident', incidents)

export default routes;
