import { Router } from "express";
import { sensorFichaTecController } from '../controllers/sensorFichaTecControllers';



class SensorFichaTecRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', sensorFichaTecController.list);
        this.router.get('/:id', sensorFichaTecController.getOne);
        this.router.post('/', sensorFichaTecController.create);
        this.router.put('/:id', sensorFichaTecController.update);
        this.router.delete('/:id',sensorFichaTecController.delete);
        
    }
}
const sensorFichaTecRoutes = new SensorFichaTecRoutes();
export default sensorFichaTecRoutes.router;