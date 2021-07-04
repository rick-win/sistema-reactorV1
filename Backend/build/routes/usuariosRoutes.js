"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class UsuariosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('GestionarUsuarios'));
    }
}
const usuariosRoutes = new UsuariosRoutes();
exports.default = usuariosRoutes.router;
