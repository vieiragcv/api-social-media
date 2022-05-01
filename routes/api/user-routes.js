const router = require('express').Router();

const { 
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
 } = require('../../controllers/user-controller');

/*------------------------- 
 -     /api/users/ 
-------------------------*/
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

/*------------------------- 
 -  /api/users/<userId>
-------------------------*/
router
 .route('/:id')
 .get(getUserById)
 .put(updateUser)
 .delete(deleteUser)

router
 .route('/:userId/friends')
 .post(addFriend);

router
 .route('/:userId/friends/:friendId')
 .delete(deleteFriend);

module.exports = router;