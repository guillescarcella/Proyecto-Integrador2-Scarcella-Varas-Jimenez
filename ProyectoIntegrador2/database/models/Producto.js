module.exports = function (sequelize, dataTypes ) {
    let alias = "Producto";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
            notNull: true
        },
        nombre:{
            type: dataTypes.STRING(255),
            notNull: true

        },
        descripcion:{
            type: dataTypes.STRING(255),
            notNull: true
        },
        foto:{
            type: dataTypes.STRING(255),
            notNull: true
        },
        createdAt:{
            type: dataTypes.DATE,
            notNull: true
        },
        updatedAt:{
            type: dataTypes.DATE,
            notNull: true
        },
        deletedAt:{
            type: dataTypes.DATE,
            notNull: true
        },
        FkUserId:{
            type: dataTypes.INTEGER
        }
  	}

    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: false
    }
    
    let Producto = sequelize.define(alias, cols, config);
    Producto.associate= function(models){
        Producto.belongsTo(models.Usuario,{
            as: 'usuario',
            foreignkey:'FkUserId'
        });
        Producto.hasMany(models.Comentario, {
            as: 'comentario',
            foreignKey: 'FKUserId'
        })
    }
    return Producto;
}
