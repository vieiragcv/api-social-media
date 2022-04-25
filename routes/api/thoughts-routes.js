const router = require('express').Router();

const { 
  getAllThoughts } = require('../../controllers/thoughts-controller');

router
  .route('/')
  .get(getAllThoughts);

module.exports = router;