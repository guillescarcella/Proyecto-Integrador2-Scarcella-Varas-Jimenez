module.exports = function (sequelize, dataTypes ) {
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        texto:{
            type: dataTypes.STRING(255)
        },
        FkUserId:{
            type:dataTypes.INTEGER
        },
        FkProductId:{
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
        tableName: "comentarios", //nombre tabla
        timestamps: true,
        underscored: false
    }
    const Comentario = sequelize.define(alias, cols, config)
        Comentario.associate = function(models){
            Comentario.belongsTo(models.Usuario, {
                as: 'usuario',
                foreignkey:'FkUserId'
            });
            Comentario.belongsTo(models.Producto, {
                as: 'producto',
                foreignKey: 'FkProductId',
            })
        }
        return Comentario
}
