const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
} = require ('../../controllers/userControllers');


// unsure on routing
// get  all users 
router.route('/').get(getUsers).post(createUser);


// get single user by id.
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);


module.exports = router;
