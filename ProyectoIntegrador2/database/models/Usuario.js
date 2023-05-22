module.exports = function (sequelize, dataTypes ) {
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email: {
            type : dataTypes.STRING(255)
        },
        username: {
            type : dataTypes.STRING(255)
        },
        contra:{
            type : dataTypes.STRING(255)
        },
        foto:{
            type : dataTypes.STRING(255)
        },
        fecha: {
            type : dataTypes.DATE
        },
        dni:{
            type : dataTypes.INTEGER
        },
        createdAt:{
            type: dataTypes.DATE
        },
        updatedAt:{
            type: dataTypes.DATE
        },
        deletedAt:{
            type: dataTypes.DATE
        }
  	}

    let config = {
        tableName: "usuarios",
        timestamps: false,
        underscored: true
    }
    
    let Usuarios = sequelize.define(alias, cols, config);
    return Usuarios;
}
