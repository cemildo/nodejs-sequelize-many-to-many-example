const StudentService =  require('../services/student');

class StudentController{
    static async create(req, res){
        const student = await StudentService.insert(req, res);
        res.json(student);
    }

    static async remove(req, res) {
        const student = await StudentService.removeById(req, res);
        res.json(student);
    }

    static async get(req, res) {
        const allStudents = await StudentService.findAll(req, res);
        res.json(allStudents);
    }

    static async getOne(req, res) {
        const student = await StudentService.findById(req, res);
        res.json(student);
    }

    static async update(req, res) {
        const student = await StudentService.updateById(req, res);
        res.json(student);
    }
}

module.exports = StudentController;
