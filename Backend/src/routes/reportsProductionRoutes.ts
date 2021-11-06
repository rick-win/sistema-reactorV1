import { Router } from "express";
import { productionController } from '../controllers/reportsProductionControl';

class ReportsProductionRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', productionController.list);
        this.router.get('/:id', productionController.getOne);
        this.router.post('/', productionController.create);
        this.router.put('/:id', productionController.update);
        this.router.delete('/:id',productionController.delete);

    }
}
const reportsProductionRoutes = new ReportsProductionRoutes();
export default reportsProductionRoutes.router;