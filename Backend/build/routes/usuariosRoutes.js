"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosControllers_1 = require("../controllers/usuariosControllers");
class UsuariosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', usuariosControllers_1.usuariosController.list);
        this.router.get('/:id', usuariosControllers_1.usuariosController.getOne);
        this.router.post('/', usuariosControllers_1.usuariosController.create);
        this.router.put('/:id', usuariosControllers_1.usuariosController.update);
        this.router.delete('/:id', usuariosControllers_1.usuariosController.delete);
    }
}
const usuariosRoutes = new UsuariosRoutes();
exports.default = usuariosRoutes.router;
