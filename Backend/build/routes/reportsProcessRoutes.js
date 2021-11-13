"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reportsProcessControl_1 = require("../controllers/reportsProcessControl");
class ReportsProcessRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', reportsProcessControl_1.processController.list);
        this.router.get('/:id', reportsProcessControl_1.processController.getOne);
        this.router.post('/', reportsProcessControl_1.processController.create);
        this.router.put('/:id', reportsProcessControl_1.processController.update);
        this.router.delete('/:id', reportsProcessControl_1.processController.delete);
    }
}
const reportsProcessRoutes = new ReportsProcessRoutes();
exports.default = reportsProcessRoutes.router;
