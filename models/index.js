const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');
const UserPost = require('./UserPost')

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.belongsToMany(Post, {
  through: UserPost,
  as: 'user_posts',

  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.belongsToMany(User, {
  through: UserPost,
  as: 'user_posts',
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

UserPost.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

UserPost.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(UserPost, {
  foreignKey: 'user_id'
});

Post.hasMany(UserPost, {
  foreignKey: 'post_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});


module.exports = {User, Post, UserPost, Comment};