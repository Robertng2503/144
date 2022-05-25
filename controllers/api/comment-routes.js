const router = require('express').Router();


router.get('/', (req, res) => {
    
});

// Creates post
router.post('/', withAuth, (req, res) => {
    
});
  
// Deletes comment
router.delete('/', withAuth, (req, res) => {
   
});

module.exports = router;