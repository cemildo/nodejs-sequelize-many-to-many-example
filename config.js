const dotenv = require('dotenv');
const envVars = dotenv.config().parsed;

const config = {
    host: 'http://localhost',
    port: '3000',
    db: {
        name:'db_school',
        user:'root',
        password: envVars.MYSQL_PASSWORD ,
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
    },
    facebook: {
        clientID: envVars.clientID,
        clientSecret: envVars.clientSecret
    },
    google:{
        clientID: envVars.GoogleClientID,
        clientSecret: envVars.GoogleClientSecret
    },
    front_root: 'public/dist/school-app'
};

module.exports = config;
