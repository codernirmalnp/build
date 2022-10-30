"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/', async () => {
    return { welcome: 'Welecome to todo Application of Nirmal' };
});
Route_1.default.get('/task', 'TasksController.index');
Route_1.default.post('/task', 'TasksController.create');
Route_1.default.get('/task/:id?', 'TasksController.show');
Route_1.default.patch('/task/:id?', 'TasksController.update');
Route_1.default.delete('/task/:id?', 'TasksController.destroy');
//# sourceMappingURL=routes.js.map