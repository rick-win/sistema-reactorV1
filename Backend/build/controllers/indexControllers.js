"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ tex: 'la API esta en api/usuarios' });
    }
}
exports.indexController = new IndexController();
