class StudentService {
    static async updateById(connection, student) {
        const studentFromDb = await StudentService.findById(connection, student.stuId);
        return studentFromDb.updateAttributes(student);
    }
    static insert(connection, student){
        return connection.student.create(student);
    }
    static removeById(connection, id) {
        return connection.student.destroy({ where: { stuId: id } })
    }

    static findById(connection, id) {
        return connection.student.findOne({ where: { stuId: id } });
    }

    static findAll(connection) {
        return connection.student.findAll({});
    }
}

module.exports = StudentService;

/*

connection.student.find({
        include: [{
            model: connection.lecture,
            as:'class', 
        }],
        where: { stuId: 5 }
        }).then(result => {
            res.json(result);
        }); 

*/