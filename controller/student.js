const StudentService =  require('../services/students');

class StudentController{
    static async create(req, res, connection){
        const student = await StudentService.insert(connection, req.body);
        res.json(student);
    }
    
    static async remove(req, res, connection) {
        const student = await StudentService.removeById(connection, req.params.id);
        res.json(student);
    }
    
    static async get(req, res, connection) {
        const allStudents = await StudentService.findAll(connection);
        res.json(allStudents);
    }
    
    static async getOne(req, res, connection) {
        const student = await StudentService.findById(connection, req.params.id);
        res.json(student);
    }
    
    static async update(req, res, connection) {
        const student = await StudentService.updateById(connection, req.body);
        res.json(student);
    }
}

module.exports = StudentController;
 