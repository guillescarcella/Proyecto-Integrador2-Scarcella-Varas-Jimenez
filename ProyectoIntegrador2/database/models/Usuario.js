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
        timestamps: true,
        underscored: false
    }
    
    const Usuario = sequelize.define(alias, cols, config);
    Usuario.associate= function(models){
        Usuario.hasMany(models.Producto, {
            as: 'FkUser',
            foreignKey: 'FkUserId'
        })
        /*Usuario.hasMany(models.Comentario, {
            as: 'comentario',
            foreignKey: 'FkUserId'
        })*/
        
    }
    return Usuario;
}
