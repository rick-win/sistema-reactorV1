import { checkRole } from '../middlewares/role';
import { checkJwt } from '../middlewares/jwt';
import { Router } from 'express';
import SensorReadingsController from "../controller/SensorReadingsController";

const router = Router();

// Get all users
router.get('/',[checkJwt, checkRole(['admin', 'operario', 'mantenimiento'])], SensorReadingsController.getAll);

// Get one user
router.get('/:id',[checkJwt, checkRole(['admin', 'operario', 'mantenimiento'])],  SensorReadingsController.getById);

// Create a new user
// router.post('/',[checkJwt, checkRole(['admin', 'operario'])],  reportsProductionController.newProduction);
//
// // Edit user
// // router.patch('/:id',[checkJwt, checkRole(['admin', 'operario'])],  reportsProductionController);
//
// // Delete
// router.delete('/:id',[checkJwt, checkRole(['admin', 'operario'])],  reportsProductionController.deleteProduction);

export default router;
