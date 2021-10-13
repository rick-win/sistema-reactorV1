import { Router } from "express";
import {tolvaControllers} from '../controllers/tolvaControllers';

class TolvaRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', tolvaControllers.listTolva);
        this.router.get('/:id', tolvaControllers.getOneTolva);
        this.router.post('/', tolvaControllers.createTolva);
        // this.router.post('/crearRol', usuariosController.createRol);
        this.router.put('/:id', tolvaControllers.updateTolva);
        this.router.delete('/:id',tolvaControllers.deleteTolva);
        
    }
}
const tolvaRoutes = new TolvaRoutes();
export default tolvaRoutes.router;