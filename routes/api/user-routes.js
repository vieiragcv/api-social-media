const router = require('express').Router();
const { 
  getAllUsers,
  createUser,
  updateUser
 } = require('../../controllers/user-controller');

router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

router
 .route('/:id')
 .put(updateUser);

module.exports = router;