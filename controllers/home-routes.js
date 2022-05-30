const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, UserPost } = require('../models');

// Get post for homepage
router.get('/', (req, res) => {
  console.log('=========');
  Post.findAll({
    attributes: ['id','post_contents','title','created_at',

      [sequelize.literal('(SELECT COUNT(*) FROM user_post WHERE post.id = user_post.post_id)'), 'post_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id','comment_text','post_id','user_id','created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));

      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get post
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'post_contents',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM user_post WHERE post.id = user_post.post_id)'), 'post_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id','comment_text','post_id','user_id','created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found!' });
        return;
      }
      const post = dbPostData.get({ plain: true });
      res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get login
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;