class TeacherService {

  static async updateById(req, res) {
    const teacherFromDb = await TeacherService.findById(req, res);
    return teacherFromDb.updateAttributes(req.body);
  }

  static insert(req, res) {
    return req.models.uni_teacher.create(req.body);
  }

  static removeById(req, res) {
    return req.models.uni_teacher.destroy({
      where: {
        teacherNumber: req.params.id
      }
    });
  }

  static findById(req, res) {
    return req.models.uni_teacher.findOne({
      where: {
        teacherNumber: req.params.id
      }
    });
  }

  static findAll(req, res) {
    return req.models.uni_teacher.findAll({});
  }

  // get lecture model as well.
  static findStudentByIdIcludeClasses(req, res) {
    return req.models.uni_teacher.find({
      include: [{
        model: req.models.uni_class,
        as: 'class',
      },
      {
        model: req.models.uni_student,
        as: 'class',
      }],
      where: {
        teacherNumber: req.params.id
      }
    });
  }
}

module.exports = TeacherService;
