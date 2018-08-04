const sequelize = require('sequelize');

exports.init = (connection) => {
    return connection.define('uni_teacher', {
        teacherNumber: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: sequelize.STRING(50),
        branch: sequelize.STRING(50),
        birthday: sequelize.DATE
    });
}
