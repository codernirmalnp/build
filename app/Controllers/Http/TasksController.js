"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Database"));
const Task_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Task"));
class TasksController {
    async index({ request }) {
        const page = request.input('page', 1);
        const limit = 3;
        const task = await Database_1.default.from('tasks').paginate(page, limit);
        return task;
    }
    async create({ request }) {
        const data = request.only(['task', 'description', 'task_status']);
        await Database_1.default
            .insertQuery()
            .table('tasks')
            .insert(data);
        return { success: true };
    }
    async store({}) { }
    async show({ params }) {
        const task = await Task_1.default.find(params.id);
        return task;
    }
    async edit({}) {
    }
    async update({ params, request }) {
        const task = await Task_1.default.findOrFail(params.id);
        const update = await task.merge(request.only(['task', 'description', 'task_status'])).save();
        return update;
    }
    async destroy({ params }) {
        const task = await Task_1.default.findOrFail(params.id);
        await task.delete();
        return task;
    }
}
exports.default = TasksController;
//# sourceMappingURL=TasksController.js.map