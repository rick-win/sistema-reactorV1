"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sensorFichaTecControllers_1 = require("../controllers/sensorFichaTecControllers");
class SensorFichaTecRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', sensorFichaTecControllers_1.sensorFichaTecController.list);
        this.router.get('/:id', sensorFichaTecControllers_1.sensorFichaTecController.getOne);
        this.router.post('/', sensorFichaTecControllers_1.sensorFichaTecController.create);
        this.router.put('/:id', sensorFichaTecControllers_1.sensorFichaTecController.update);
        this.router.delete('/:id', sensorFichaTecControllers_1.sensorFichaTecController.delete);
    }
}
const sensorFichaTecRoutes = new SensorFichaTecRoutes();
exports.default = sensorFichaTecRoutes.router;
