const router = require('express').Router();


router.get('/', (req, res) => {
    Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Creates post
router.post('/', withAuth, (req, res) => {
    
});
  
// Deletes comment
router.delete('/', withAuth, (req, res) => {
   
});

module.exports = router;