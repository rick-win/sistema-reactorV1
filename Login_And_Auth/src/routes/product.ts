import { checkRole } from '../middlewares/role';
import { checkJwt } from '../middlewares/jwt';
import { Router } from 'express';
import reportsProductController from "../controller/ReportsProductController";

const router = Router();

// Get all users
router.get('/',[checkJwt, checkRole(['admin', 'operario'])], reportsProductController.getAll);

// Get one user
router.get('/:id',[checkJwt, checkRole(['admin', 'operario'])],  reportsProductController.getById);

// Create a new user
router.post('/',[checkJwt, checkRole(['admin', 'operario'])],  reportsProductController.newProduct);

// Edit user
// router.patch('/:id',[checkJwt, checkRole(['admin', 'operario'])],  reportsProductController);

// Delete
router.delete('/:id',[checkJwt, checkRole(['admin', 'operario'])],  reportsProductController.deleteProduct);

export default router;
