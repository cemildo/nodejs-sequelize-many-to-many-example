const sequelize = require('sequelize');

exports.init = (connection) => {
    return connection.define('uni_teacher', {
        teacherNumber: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: sequelize.STRING(50),
        last_name: sequelize.STRING(50),
        email: sequelize.STRING(50),
        branch: sequelize.STRING(50),
        birthday: sequelize.DATE,
        description: sequelize.STRING(500),
    });
}
