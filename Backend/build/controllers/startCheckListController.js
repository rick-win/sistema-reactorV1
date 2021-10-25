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
exports.startCheckListController = void 0;
const database_1 = __importDefault(require("../database"));
class StartCheckListController {
    hopperLidState(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const hopper = yield database_1.default.query('select EstadoTapa_Tolva from Tolva order by Id_Tolva desc limit 1');
            res.json({});
        });
    }
}
exports.startCheckListController = new StartCheckListController();
