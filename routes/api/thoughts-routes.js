const router = require('express').Router();

const { 
  getAllThoughts,
  getThoughtsbyId,
  addThought,
  addReaction,
  deleteReaction,
  deleteThought,
  updateThought
} = require('../../controllers/thoughts-controller');

/*------------------------- 
 -     /api/thoughts/
-------------------------*/

router
  .route('/')
  .get(getAllThoughts)
  .post(addThought);
  
/*------------------------------
 - /api/thoughts/<thoughtsId>
------------------------------*/

router
  .route('/:id')
  .get(getThoughtsbyId)
  .put(updateThought) 
  .delete(deleteThought);

router
  .route('/:thoughtId/reactions')
  .post(addReaction);

/*-----------------------------------------
 - /api/thoughts/<thoughtId>/<reactionId>
-----------------------------------------*/
router
.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);


module.exports = router;