const sequelize = require('sequelize');

exports.init = (connection) => {
    const Registration = connection.define('uni_registration', {
        registrationId: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sessionName: sequelize.STRING(50),
        classId: sequelize.INTEGER,
        register_date: {
          type: sequelize.DATE,
          allowNull: false,
          defaultValue: sequelize.NOW
        },
        teacherId: sequelize.INTEGER,
        placeId: sequelize.INTEGER,
        studentId: sequelize.INTEGER,
        schoolId: sequelize.INTEGER
    });
    
  // one class can have multuple student
  connection.models.uni_class.belongsToMany(connection.models.uni_student, {
    through: { model: Registration },
    foreignKey: 'classId',
    constraints: false
  });

  // one student can have multuple class
  connection.models.uni_student.belongsToMany(connection.models.uni_class, {
    through: { model: Registration },
    foreignKey: 'studentId',
    constraints: false
  });

  // one student can have multuple teacher
  connection.models.uni_student.belongsToMany(connection.models.uni_teacher, {
    through: { model: Registration },
    foreignKey: 'studentId',
    constraints: false
  });

  // one teacher can have multuple student
  connection.models.uni_teacher.belongsToMany(connection.models.uni_student, {
    through: { model: Registration },
    foreignKey: 'teacherId',
    constraints: false
  });


  connection.models.uni_teacher.belongsToMany(connection.models.uni_class, {
    through: { model: Registration },
    foreignKey: 'teacherId',
    constraints: false
  });

  connection.models.uni_class.belongsToMany(connection.models.uni_teacher, {
    through: { model: Registration },
    foreignKey: 'classId',
    constraints: false
  });

  return Registration; 
}
 