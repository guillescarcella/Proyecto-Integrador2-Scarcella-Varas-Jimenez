module.exports = function (sequelize, dataTypes ) {
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        name: {
            type : dataTypes.STRING
        }
  	}

    let config = {
        tableName: "movies",
        timestamps: false,
        underscored: true
    }
    
    let Movies = sequelize.define(alias, cols, config);
    return Movies;
}
