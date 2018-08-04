const sequelize = require('sequelize');

exports.init = (connection) => {
    const Class = connection.define('uni_class', {
        classNumber: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: sequelize.STRING(50),
        schedule: sequelize.DATE,
        room: sequelize.INTEGER
    });

    // Class.hasMany(connection.models.uni_registration,
    //  {foreignKey: 'classId', as: 'uni_registration'});


    return Class;
}
