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
exports.sensorFichaTecController = void 0;
const database_1 = __importDefault(require("../database"));
class SensorFichaTecController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sensor = yield database_1.default.query('SELECT * FROM  sensor');
            res.json(sensor);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const sensor = yield database_1.default.query('SELECT * FROM sensor WHERE Id_Sensor = ?', [id]);
            if (sensor.length > 0) {
                return res.json(sensor[0]);
            }
            res.status(404).json({ text: 'El sensor no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO sensor set ?', [req.body]);
            res.json({ message: 'Sensor Guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE sensor set ? WHERE Id_Sensor = ?', [req.body, id]);
            res.json({ message: 'El Sensor fue Actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM sensor WHERE Id_Sensor = ?', [id]);
            res.json({ message: 'El sensor fue Elimiado' });
        });
    }
}
exports.sensorFichaTecController = new SensorFichaTecController();
