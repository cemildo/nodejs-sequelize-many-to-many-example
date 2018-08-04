const student = require('./student');
const lecture = require('./class');
const teacher = require('./teacher');
const session = require('./registration');

const routes = [student, lecture, teacher, session];

module.exports = {
  init: (app) => routes.map(route => route(app))
}
