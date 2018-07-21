const Sequelize = require('sequelize');
const shemas = require('./shemas');
let models = null;

module.exports.init = (req, res, next) => {
    if(models) {
        req.models = models;
        return next();
    }
    
    const connection = new Sequelize(
        'db_itclub', 'db_administrator', '1tclub_db_pass!', {
        host: 'db4free.net',
        dialect: 'mysql',
        define: {
            freezeTableName: true,
            timestamps: false
        }
    });
    
    connection.authenticate()
    .then(() => console.log('Connection has been established successfully!!!'))
    .catch(err => console.log('Connection ERROR!', err)); 
    
    const [
        student,
        lecture,
        enrollment
    ] = shemas.init(connection);
    
    // TODO :  this can be put on the req object and get it from there.
    const sequalize = { 
        student,
        lecture,
        enrollment
    };

    // UNDER HERE, DEFINE SCHEMA RELATIONSHIPS
    sequalize.student.belongsToMany(sequalize.lecture, {
        through: sequalize.enrollment,
        as: 'class',
        foreignKey: 'fk_stuId', 
    });

    sequalize.lecture.belongsToMany(sequalize.student, {
        through: sequalize.enrollment,
        as: 'student',
        foreignKey: 'fk_classNumber', 
    });
     
    req.models = sequalize;
    models = sequalize;
    next();
}
