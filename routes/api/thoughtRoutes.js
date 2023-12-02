const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  createReaction,
  deleteReaction,
} = require ('../../controllers/thoughtsController');


router.route('/').get(getThoughts).post(createThought);


router.route('/:userId').get(getSingleThought).delete(deleteThought).put(updateThought);

router.route('/:thoughtId').delete(deleteThought).put(updateThought);

router.route('/:thoughtId/reaction').post(createReaction).delete(deleteReaction);

module.exports = router;