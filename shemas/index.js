const student = require('./students');
const clazz = require('./classes');
const enrollment = require('./enrollment');

const shemas = [student, clazz, enrollment];

module.exports = {
    init: (connection) => shemas.map(shema => shema.init(connection))
}
