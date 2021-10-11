"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//Routes imports
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
const sensorFichaTecRoutes_1 = __importDefault(require("./routes/sensorFichaTecRoutes"));
const reportsProductRoutes_1 = __importDefault(require("./routes/reportsProductRoutes"));
const reportsFailureRoutes_1 = __importDefault(require("./routes/reportsFailureRoutes"));
const reportsProcessRoutes_1 = __importDefault(require("./routes/reportsProcessRoutes"));
const reportsProductionRoutes_1 = __importDefault(require("./routes/reportsProductionRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/sistemaReactor/usuarios', usuariosRoutes_1.default);
        this.app.use('/sistemaReactor/sensores', sensorFichaTecRoutes_1.default);
        this.app.use('/sistemaReactor/product', reportsProductRoutes_1.default);
        this.app.use('/sistemaReactor/process', reportsProcessRoutes_1.default);
        this.app.use('/sistemaReactor/failure', reportsFailureRoutes_1.default);
        this.app.use('/sistemaReactor/production', reportsProductionRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
