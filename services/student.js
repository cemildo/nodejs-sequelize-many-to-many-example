class StudentService {

  static async updateById(req, res) {
    const studentFromDb = await StudentService.findById(req, res);
    return studentFromDb.updateAttributes(req.body);
  }

  static insert(req, res) {
    return req.models.uni_student.create(req.body);
  }

  static removeById(req, res) {
    return req.models.uni_student.destroy({
      where: {
        stuId: req.params.id
      }
    });
  }

  static findById(req, res) {
    return req.models.uni_student.findOne({
      where: {
        stuId: req.params.id
      }
    });
  }

  static findAll(req, res) {
    return req.models.uni_student.findAll({});
  }
 
  static async findStudentByIdIcludeTeachers(req, res) {
    return await req.models.uni_student.findAll({
      include: [ 
        { model: req.models.uni_class},
        { model: req.models.uni_teacher}
      ],
     // attributes: [
     //   'teacherId', 'placeId', 'schoolId'
     //  ],
      where: { stuId: req.params.id }
    });
  }
}

module.exports = StudentService;
