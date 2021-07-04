import { Router } from "express";

class UsuariosRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', (req, res)=>res.send('GestionarUsuarios'));
    }
}
const usuariosRoutes = new UsuariosRoutes();
export default usuariosRoutes.router;