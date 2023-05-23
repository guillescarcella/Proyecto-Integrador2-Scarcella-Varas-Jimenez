module.exports = function (sequelize, dataTypes ) {
    let alias = "Producto";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        nombre: {
            type : dataTypes.STRING(255)
        },
        descripcion:{
            type : dataTypes.STRING(255)
        },
        foto:{
            type : dataTypes.STRING(255)
        },
        idUser:{
            type:dataTypes.INTEGER
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
        tableName: "productos",
        timestamps: false,
        underscored: true
    }
    
    let Producto = sequelize.define(alias, cols, config);
    Producto.associate= function(models){
        Producto.belongsTo(models.Producto,{
            as: 'userRel',
            foreignkey:'FkUserId'
        });
    }
    return Producto;
}
