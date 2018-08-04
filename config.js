const dotenv = require('dotenv');
const envVars = dotenv.config().parsed;

const config = {
    db: {
        name:'db_school',
        user:'root',
        password: `${envVars.MYSQL_PASSWORD}`,
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
        clientID: envVars.clientID,
        clientSecret: envVars.clientSecret
    }
};

module.exports = config;