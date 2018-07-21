const StudentService =  require('../services/students');

class StudentController{
    static async create(req, res){
        const model = req.models.student;
        const student = await StudentService.insert(model, req.body);
        res.json(student);
    }
    
    static async remove(req, res) {
        const model = req.models.student;
        const student = await StudentService.removeById(model, req.params.id);
        res.json(student);
    }
    
    static async get(req, res) {
        const model = req.models.student;
        const allStudents = await StudentService.findAll(model);
        res.json(allStudents);
    }
    
    static async getOne(req, res) {
        const model = req.models.student;
        const student = await StudentService.findById(model, req.params.id);
        res.json(student);
    }
    
    static async update(req, res) {
        const model = req.models.student;
        const student = await StudentService.updateById(model, req.body);
        res.json(student);
    }
}

module.exports = StudentController;
 