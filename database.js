const Sequelize = require('sequelize');
var shemas = require('./shemas');
exports.init = () => {
    const connection = new Sequelize(
        'db_itclub', 'db_administrator', '1tclub_db_pass!', {
        host: 'db4free.net',
        dialect: 'mysql',
        define: {
            freezeTableName: true,
            timestamps: false
        }
    });
    // TODO: fix this, all the shemas are already on the connection 
    [student, lecture, enrollment] = shemas.init(connection),
    
    connection.authenticate().then(() => {
        console.log('Connection has been established successfully!!!');
    })
    .catch(err => console.log('Connection ERROR!', err)); 
    
    student.belongsToMany(lecture, {
        through: enrollment,
        as: 'class',
        foreignKey: 'fk_stuId', 
    });


    lecture.belongsToMany(student, {
        through: enrollment,
        as: 'student',
        foreignKey: 'fk_classNumber', 
    });
     
    return {connection, student, lecture, enrollment};
} 