const TeacherService =  require('../services/teacher');

class TeacherController{
    static async create(req, res){
        const teacher = await TeacherService.insert(req, res);
        res.json(teacher);
    }

    static async remove(req, res) {
        const teacher = await TeacherService.removeById(req, res);
        res.json(teacher);
    }

    static async get(req, res) {
        const allTeachers = await TeacherService.findAll(req, res);
        res.json(allTeachers);
    }

    static async getOne(req, res) {
        const teacher = await TeacherService.findById(req, res);
        res.json(teacher);
    }

    static async update(req, res) {
        const teacher = await TeacherService.updateById(req, res);
        res.json(teacher);
    }
}

module.exports = TeacherController;
