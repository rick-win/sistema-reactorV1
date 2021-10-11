import { Router } from "express";
import { failureController } from '../controllers/reportsFailureControl';

class ReportsFailureRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', failureController.list);
        this.router.get('/:id', failureController.getRange);
        this.router.post('/', failureController.create);
        this.router.put('/:id', failureController.update);
        this.router.delete('/:id',failureController.delete);

    }
}
const failureProductRoutes = new ReportsFailureRoutes();
export default failureProductRoutes.router;