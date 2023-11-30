const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
} = require ('../../controllers/userControllers');

// get  all users // also create user?
router.route('/').get(getUsers).post(createUser);


// get single user by id.
router.route('/:userId').get(getSingleUser).delete(deleteUser);






// delete a user by id bonus to remove associated thoughtswhen deleted.
router.route('./:userId').delete(deleteUser);













module.exports = router;
