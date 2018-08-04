class ClassService {

  static async updateById(req, res) {
    const studentFromDb = await ClassService.findById(req, res);
    return studentFromDb.updateAttributes(req.body);
  }

  static insert(req, res) {
    return req.models.uni_class.create(req.body);
  }

  static removeById(req, res) {
    return req.models.uni_class.destroy({
      where: {
        classNumber: req.params.id
      }
    });
  }

  static findById(req, res) {
    return req.models.uni_class.findOne({
      where: {
        classNumber: req.params.id
      }
    });
  }

  static findAll(req, res) {
    return req.models.uni_class.findAll({});
  }

  // get lecture model as well.
  static findClassByIdIcludeStudent(req, res) {
    return req.models.uni_class.find({
      include: [{
        model: req.models.uni_student,
        as: 'class',
      }],
      where: {
        classId: req.params.id
      }
    });
  }
}

module.exports = ClassService;
