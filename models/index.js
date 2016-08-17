var Sequelize = require("sequelize");
var db = new Sequelize("postgres://localhost:5432/DBNAME", {logging: false});

var aThing = db.define('aThing', {

    aProperty: {
        type: Sequelize.STRING, 
        allowNull: false,
        validate: {notEmpty: true} 
    },
});

module.exports = {
	aThing: aThing
}