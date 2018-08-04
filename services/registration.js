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
        registrationId: req.params.id
      }
    });
  }

  static async findById(req, res) {
    return await req.models.uni_registration.findOne({
      where: {
        registrationId: req.params.id
      }
    });
  }

  static async findAll(req, res) {
    return await req.models.uni_registration.findAll({});
  } 
}

module.exports = RegistrationService;
