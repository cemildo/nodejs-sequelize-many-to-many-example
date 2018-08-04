const config = {
    db: {
        name:'db_school',
        user:'root',
        password: `${process.env.MYSQL_PASSWORD}`,
        connection: {
            params: {
                dialect: 'mysql',
                host: '127.0.0.1', 
                define: {
                    freezeTableName: true,
                    timestamps: false
                }
           }
        },
        sync:{
            params : {
                force: false
            }
        }
    }
};

module.exports = config;