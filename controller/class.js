const ClassService =  require('../services/class');

class ClassController{
    static async create(req, res){
        const lecture = await ClassService.insert(req, res);
        res.json(lecture);
    }

    static async remove(req, res) {
        const lecture = await ClassService.removeById(req, res);
        res.json(lecture);
    }

    static async get(req, res) {
        const allLectures = await ClassService.findAll(req, res);
        res.json(allLectures);
    }

    static async getOne(req, res) {
        const lecture = await ClassService.findById(req, res);
        res.json(lecture);
    }

    static async update(req, res) {
        const lecture = await ClassService.updateById(req, res);
        res.json(lecture);
    }

    static async findClassByIdIncludeRelatedStudentAndTeachers(req, res) {
        let lecture = await ClassService.findClassByIdIncludeRelatedStudentAndTeachers(req, res);
         
        res.json(lecture);
    }
}

module.exports = ClassController;
