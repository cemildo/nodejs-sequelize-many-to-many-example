class RegistrationService {

  static async updateById(req, res) {
    const sessionFromDb = await RegistrationService.findById(req, res);
    return sessionFromDb.updateAttributes(req.body);
  }

  static async insert(req, res) {
    return await req.models.uni_registration.create(req.body);
  }

  static async removeById(req, res) {
    return await req.models.uni_registration.destroy({
      where: {
        sessionId: req.params.id
      }
    });
  }

  static async findById(req, res) {
    return await req.models.uni_registration.findOne({
      where: {
        sessionId: req.params.id
      }
    });
  }

  static async findAll(req, res) {
    return await req.models.uni_registration.findAll({});
  }

  // get lecture model as well.
  static async findClassAndStudentBySessionId(req, res) {
    return await req.models.uni_registration.findAll({
      include: [
        {
          model: req.models.uni_class,
          as: 'uni_class',
        },
        {
          model: req.models.uni_student,
          as: 'uni_student',
        },
        {
          model: req.models.uni_teacher,
          as: 'uni_teacher',
        }],
      attributes: [
        'sessionId',
        'teacherId',
        'placeId',
        'schoolId'
      ],
      where: {
        classId: req.params.id
      }
    });
  }
}

module.exports = RegistrationService;
