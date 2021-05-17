const User = require('./User');
const Post = require('./Post');
const Content = require('./Content');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Content.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Content.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

User.hasMany(Content, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.hasMany(Content, {
    foreignKey: 'post_id'
});


module.exports = { User, Post, Content };