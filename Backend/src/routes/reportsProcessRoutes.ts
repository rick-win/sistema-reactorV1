import { Router } from "express";
import { processController } from '../controllers/reportsProcessControl';

class ReportsProcessRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', processController.list);
        this.router.get('/:id', processController.getOne);
        this.router.post('/', processController.create);
        this.router.put('/:id', processController.update);
        this.router.delete('/:id',processController.delete);

    }
}
const reportsProcessRoutes = new ReportsProcessRoutes();
export default reportsProcessRoutes.router;