import { checkRole } from '../middlewares/role';
import { checkJwt } from '../middlewares/jwt';
import { Router } from 'express';
import reportsProductionController from "../controller/ReportsProductionController";

const router = Router();

// Get all users
router.get('/',[checkJwt, checkRole(['admin', 'operario', 'mantenimiento'])], reportsProductionController.getAll);

// Get one user
router.get('/:id',[checkJwt, checkRole(['admin', 'operario'])],  reportsProductionController.getById);

// Create a new user
router.post('/',[checkJwt, checkRole(['admin', 'operario'])],  reportsProductionController.newProduction);

// Edit user
// router.patch('/:id',[checkJwt, checkRole(['admin', 'operario'])],  reportsProductionController);

// Delete
router.delete('/:id',[checkJwt, checkRole(['admin', 'operario'])],  reportsProductionController.deleteProduction);

export default router;
