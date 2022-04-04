"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reportsFailureControl_1 = require("../controllers/reportsFailureControl");
const startCheckListController_1 = require("../controllers/startCheckListController");
class StartChekListRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/open', startCheckListController_1.startCheckListController.hopperLidState);
        this.router.get('/alarm', reportsFailureControl_1.failureController.alarm);
        this.router.get('/:id', reportsFailureControl_1.failureController.getOne);
        this.router.post('/', reportsFailureControl_1.failureController.create);
        this.router.put('/:id', reportsFailureControl_1.failureController.update);
        this.router.delete('/:id', reportsFailureControl_1.failureController.delete);
    }
}
const starCheckListRoutes = new StartChekListRoutes();
exports.default = starCheckListRoutes.router;
