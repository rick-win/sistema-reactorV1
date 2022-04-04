import { Router } from "express";
import { failureController } from '../controllers/reportsFailureControl';
import {startCheckListController} from "../controllers/startCheckListController";

class StartChekListRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/open', startCheckListController.hopperLidState);
        this.router.get('/alarm', failureController.alarm);
        this.router.get('/:id', failureController.getOne);
        this.router.post('/', failureController.create);
        this.router.put('/:id', failureController.update);
        this.router.delete('/:id',failureController.delete);
    }
}
const starCheckListRoutes = new StartChekListRoutes();
export default starCheckListRoutes.router;