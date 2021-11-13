"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reportsProductionControl_1 = require("../controllers/reportsProductionControl");
class ReportsProductionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', reportsProductionControl_1.productionController.list);
        this.router.get('/:id', reportsProductionControl_1.productionController.getOne);
        this.router.post('/', reportsProductionControl_1.productionController.create);
        this.router.put('/:id', reportsProductionControl_1.productionController.update);
        this.router.delete('/:id', reportsProductionControl_1.productionController.delete);
    }
}
const reportsProductionRoutes = new ReportsProductionRoutes();
exports.default = reportsProductionRoutes.router;
