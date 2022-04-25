const router = require('express').Router();

const { 
  getAllThoughts,
  getThoughtsbyId,
  addThought,
  deleteThought
} = require('../../controllers/thoughts-controller');

router
  .route('/')
  .get(getAllThoughts)
  

router
  .route('/:id')
  .get(getThoughtsbyId)
  .post(addThought)
  .delete(deleteThought);

module.exports = router;