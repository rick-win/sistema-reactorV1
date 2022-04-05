import { checkRole } from './../middlewares/role';
import { checkJwt } from './../middlewares/jwt';
import { HopperController } from "../controller/HopperController";
import { Router } from 'express';

const router = Router();

router.get('/',[checkJwt, checkRole(['admin'])], HopperController.getAll);

router.get('/:id',[checkJwt, checkRole(['admin'])],  HopperController.getById);

// Create a new Hopper
router.post('/',[checkJwt, checkRole(['admin'])],  HopperController.newHopper);

// Edit Hopper
router.patch('/:id',[checkJwt, checkRole(['admin'])],  HopperController.editHopper);

// Delete
router.delete('/:id',[checkJwt, checkRole(['admin'])],  HopperController.deleteHopper);

export default router;