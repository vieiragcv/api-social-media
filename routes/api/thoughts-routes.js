const router = require('express').Router();

const { 
  getAllThoughts,
  getThoughtsbyId,
  addThought,
  addReaction,
  deleteReaction,
  deleteThought
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
  .put(addReaction)
  .delete(deleteReaction)
  .delete(deleteThought);

/*-----------------------------------------
 - /api/thoughts/<thoughtId>/<reactionId>
-----------------------------------------*/
router
.route('/:id/:thoughtsId/:reactionId').delete(deleteReaction);


module.exports = router;