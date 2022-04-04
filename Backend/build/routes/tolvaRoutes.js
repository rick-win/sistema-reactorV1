"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tolvaControllers_1 = require("../controllers/tolvaControllers");
class TolvaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', tolvaControllers_1.tolvaControllers.listTolva);
        this.router.get('/:id', tolvaControllers_1.tolvaControllers.getOneTolva);
        this.router.post('/', tolvaControllers_1.tolvaControllers.createTolva);
        // this.router.post('/crearRol', usuariosController.createRol);
        this.router.put('/:id', tolvaControllers_1.tolvaControllers.updateTolva);
        this.router.delete('/:id', tolvaControllers_1.tolvaControllers.deleteTolva);
    }
}
const tolvaRoutes = new TolvaRoutes();
exports.default = tolvaRoutes.router;
