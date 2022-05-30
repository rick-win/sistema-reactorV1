import { checkRole } from './../middlewares/role';
import { checkJwt } from './../middlewares/jwt';
import { Router } from 'express';
import IncidentController from "../controller/IncidentController";

const router = Router();

router.get('/',[checkJwt, checkRole(['admin', 'operario'])], IncidentController.getAll);

router.get('/:id',[checkJwt, checkRole(['admin', 'operario'])],  IncidentController.getById);

// Create a new Hopper
router.post('/',[checkJwt, checkRole(['admin', 'operario'])],  IncidentController.newIncident);

// Edit Hopper
// router.patch('/:id',[checkJwt, checkRole(['admin'])],  IncidentController.ed);

// Delete
router.delete('/:id',[checkJwt, checkRole(['admin', 'operario'])],  IncidentController.deleteIncident);

export default router;
