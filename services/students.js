class StudentService {
    static async updateById(model, student) {
        const studentFromDb = await StudentService.findById(model, student.stuId);
        return studentFromDb.updateAttributes(student);
    }
    static insert(model, student) { 
        return model.create(student);
    }
    static removeById(model, id) {
        return model.destroy({ where: { stuId: id } });
    }

    static findById(model, id) {
        return model.findOne({ where: { stuId: id } });
    }

    static findAll(model) {
        return model.findAll({});
    }

    static findStudentByIdIcludeClasses(model, id) {
        return model.find({
            /* 
            // get lecture model as well.
            include: [{
                model: lecture,
                as:'class', 
            }],
            */
            where: { stuId: id }
        });
    }
}

module.exports = StudentService;