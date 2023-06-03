module.exports = function (sequelize, dataTypes ) {
    let alias = "Producto";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre:{
            type: dataTypes.STRING(255)
        },
        descripcion:{
            type: dataTypes.STRING(255)
        },
        foto:{
            type: dataTypes.STRING(255)
        },
        createdAt:{
            type: dataTypes.DATE
        },
        updatedAt:{
            type: dataTypes.DATE
        },
        deletedAt:{
            type: dataTypes.DATE
        },
        FkUserId:{
            type: dataTypes.INTEGER
        }
  	}

    let config = {
        tableName: "productos",
        timestamps: false,
    }
    
    let Producto = sequelize.define(alias, cols, config);
    Producto.associate= function(models){
        Producto.belongsTo(models.Usuario,{
            as: 'usuario',
            foreignkey:'FkUserId'
        });
        Producto.hasMany(models.Comentario, {
            as: 'comentario',
            foreignKey: 'FkProductId'
        })
    }
    return Producto;
}
