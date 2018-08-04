const sequelize = require('sequelize');

exports.init = (connection) => {
    const Session = connection.define('uni_session', {
        sessionId: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sessionName: sequelize.STRING(50),
        classId: sequelize.INTEGER,
        time: sequelize.DATE,
        teacherId: sequelize.INTEGER,
        placeId: sequelize.INTEGER,
        studentId: sequelize.INTEGER,
        schoolId: sequelize.INTEGER
    });



      // connection.models.uni_student.belongsToMany(connection.models.uni_class,
      // { through: Session, as: 'class', foreignKey: 'classId' });



      // SequelizeEagerLoadingError: uni_class is not associated to uni_session!
/*
      Session.hasOne(connection.models.uni_class,
        {foreignKey: 'classNumber', as: 'uni_class'});

      Session.hasMany(connection.models.uni_student,
        {foreignKey: 'stuId', as: 'uni_student'});

      Session.hasOne(connection.models.uni_teacher,
        {foreignKey: 'teacherNumber', as: 'uni_teacher'});


        connection.models.uni_class.belongsToMany(connection.models.uni_student,
         {through: Session,
          as: 'uni_student',
          foreignKey: 'classId'});

*/

       // Session.hasMany(connection.models.uni_student,
       // {foreignKey: 'stuId', as: 'uni_student'});

       // Session.hasMany(connection.models.uni_class,
       //     {foreignKey: 'classNumber', as: 'uni_class'});

    return Session;

}

