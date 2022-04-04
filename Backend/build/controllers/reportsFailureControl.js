"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.failureController = void 0;
const database_1 = __importDefault(require("../database"));
class ReportsFailureController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield database_1.default.query('SELECT * FROM Log_Alarma');
            res.json(product);
        });
    }
    alarm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield database_1.default.query('SELECT Mensaje FROM Log_Alarma ORDER BY id DESC LIMIT 1');
            res.json(product);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const product = yield database_1.default.query('SELECT * FROM Log_Alarma WHERE Alarma_Id_Alarma = ?', [id]);
            if (product.length > 0) {
                return res.json(product[0]);
            }
            res.status(404).json({ text: 'El reporte de producto buscado no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Log_Alarma set ?', [req.body]);
            res.json({ message: 'Usuario guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE usuario set ? WHERE Id_Usuario = ?', [req.body, id]);
            res.json({ message: 'El Usuario fue Actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM usuario WHERE Id_Usuario = ?', [id]);
            res.json({ message: 'El usuario fue Elimiado' });
        });
    }
}
exports.failureController = new ReportsFailureController();
