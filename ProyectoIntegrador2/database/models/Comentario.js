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
        idUser:{
            type:dataTypes.INTEGER
        },
        idProduct:{
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
        timestamps: false,
        underscored: true
    }
    
    let Comentarios = sequelize.define(alias, cols, config);
    return Comentarios;
}
