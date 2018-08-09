const student = require('./student');
const lecture = require('./class');
const teacher = require('./teacher');
const registration = require('./registration');
// const authentication = require('./authentications');

const routes = [
  student, lecture, teacher, registration,
  /* authentication  // will be implemented with login*/
];

module.exports = {
  init: (app) => routes.map(route => route(app))
}
