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
exports.tolvaControllers = void 0;
const database_1 = __importDefault(require("../database"));
class TolvaControllers {
    listTolva(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tolva = yield database_1.default.query('SELECT * FROM Usuario');
            res.json(tolva);
        });
    }
    getOneTolva(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const tolva = yield database_1.default.query('SELECT * FROM Tolva WHERE Id_Usuario = ?', [id]);
            if (tolva.length > 0) {
                return res.json(tolva[0]);
            }
            res.status(404).json({ text: 'Tolva no existe' });
        });
    }
    createTolva(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('INSERT INTO Tolva set ?', [req.body]);
                res.json({ message: 'Tolva guardado' });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    // public async createRol (req: Request , res:Response): Promise<void>{
    //     await pool.query('INSERT INTO Rol set ?', [req.body]);|
    //     res.json({message: 'Usuario guardado'});
    // }
    updateTolva(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE Usuario set ? WHERE Id_Usuario = ?', [req.body, id]);
            res.json({ message: 'El tolva fue Actualizado' });
        });
    }
    deleteTolva(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM Usuario WHERE Id_Usuario = ?', [id]);
            res.json({ message: 'El tolva fue Elimiado' });
        });
    }
}
exports.tolvaControllers = new TolvaControllers();
