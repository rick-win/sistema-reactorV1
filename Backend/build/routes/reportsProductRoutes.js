"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reportsProductControl_1 = require("../controllers/reportsProductControl");
class ReportsProductRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', reportsProductControl_1.productsController.list);
        this.router.get('/:id', reportsProductControl_1.productsController.getOne);
        this.router.post('/', reportsProductControl_1.productsController.create);
        this.router.put('/:id', reportsProductControl_1.productsController.update);
        this.router.delete('/:id', reportsProductControl_1.productsController.delete);
    }
}
const reportsProductRoutes = new ReportsProductRoutes();
exports.default = reportsProductRoutes.router;
