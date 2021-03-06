const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Content extends Model { }

Content.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        content_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'content'
    }
)

module.exports = Content;