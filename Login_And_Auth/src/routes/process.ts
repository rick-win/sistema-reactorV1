import { checkRole } from '../middlewares/role';
import { checkJwt } from '../middlewares/jwt';
import { Router } from 'express';
import ReportsProcessController from "../controller/ReportsProcessController";

const router = Router();

// Get all users
router.get('/',[checkJwt, checkRole(['admin', 'operario', 'mantenimiento'])], ReportsProcessController.getAll);

// Get one user
router.get('/:id',[checkJwt, checkRole(['admin', 'operario'])],  ReportsProcessController.getById);

// Create a new user
router.post('/',[checkJwt, checkRole(['admin', 'operario'])],  ReportsProcessController.newProcess);

// Edit user
// router.patch('/:id',[checkJwt, checkRole(['admin', 'operario'])],  ReportsProcessController);

// Delete
router.delete('/:id',[checkJwt, checkRole(['admin', 'operario'])],  ReportsProcessController.deleteProcess);

export default router;
