const RegistrationService =  require('../services/registration');

class SessionController{
    static async create(req, res){
        const session = await RegistrationService.insert(req, res);
        res.json(session);
    }

    static async remove(req, res) {
        const student = await RegistrationService.removeById(req, res);
        res.json(student);
    }

    static async get(req, res) {
        const allSessions = await RegistrationService.findAll(req, res);
        res.json(allSessions);
    }

    static async getOne(req, res) {
        const session = await RegistrationService.findById(req, res);
        res.json(session);
    }

    static async update(req, res) {
        const session = await RegistrationService.updateById(req, res);
        res.json(session);
    }

    static async findClassAndStudentBySessionId(req, res) {
        const session = await RegistrationService.findClassAndStudentBySessionId(req, res);
        res.json(session);
    }
}

module.exports = SessionController;
