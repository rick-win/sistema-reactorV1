import express, {Application, Request, Response} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import pool from './database'
import {request, response} from 'express'

//Routes imports
import usuariosRoutes from './routes/usuariosRoutes';
import indexRoutes from './routes/indexRoutes'
import tolvaRoutes from './routes/tolvaRoutes';
import sensorFichaTecRoutes from './routes/sensorFichaTecRoutes';
import reportsProductRoutes from "./routes/reportsProductRoutes";
import reportsFailureRoutes from "./routes/reportsFailureRoutes";
import reportsProcessRoutes from "./routes/reportsProcessRoutes";
import reportsProductionRoutes from "./routes/reportsProductionRoutes";
import startCheckListRoutes from "./routes/startCheckListRoutes";


class Server{

   public app: Application;

    constructor(){
        this.app= express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
    }

    routes(): void{
        this.app.use('/',indexRoutes);
        this.app.use('/sistemaReactor/usuarios',usuariosRoutes);
        this.app.use('/sistemaReactor/sensores', sensorFichaTecRoutes);
        this.app.use('/sistemaReactor/product', reportsProductRoutes);
        this.app.use('/sistemaReactor/process', reportsProcessRoutes);
        this.app.use('/sistemaReactor/failure', reportsFailureRoutes);
        this.app.use('/sistemaReactor/production', reportsProductionRoutes );
        this.app.use('/sistemaReactor/startCheckList', startCheckListRoutes );
        this.app.use('/api/usuarios',usuariosRoutes);
        this.app.use('/api/sensores', sensorFichaTecRoutes);
        this.app.use('/api/tolva', tolvaRoutes);
    }

    start():void{
        this.app.listen(this.app.get('port'), () => {
            console.log('server on port', this.app.get('port'))
        });
        console.log("Done")
    }

}
const server = new Server();
server.start();