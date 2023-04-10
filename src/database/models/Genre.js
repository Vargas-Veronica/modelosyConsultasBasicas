module.exports = (sequelize, DataTypes) => {
   
    const alias = "Genre";

    const cols = {   
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER(10).UNSIGNED
        },

        name : {
            allowNull: false,
            type: DataTypes.STRING(100)           

        },
       
        ranking: {
            allowNull: false,
            type: DataTypes.INTEGER(10).UNSIGNED

        },      
       
        active: {
            allowNull: false,
            type: DataTypes.BOOLEAN
        }
    }
        
    const config = {     
        tableName: "genres",
        createdAt: "created_at",
        updatedAt: "updated_at",
    }

    const Genre = sequelize.define(alias,cols,config);
    
    return Genre;
}
