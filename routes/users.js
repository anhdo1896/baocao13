var express = require('express');
var router = express.Router();
var userCotroller = require('./../controllers/userController')
/* GET users listing. */

router.route('/')
  .get(userCotroller.getUsers)
  .post(userCotroller.postUser)

router.route('/:id')
  .get(userCotroller.getUser)
  .delete(userCotroller.deleteUser)
  .put(userCotroller.updateUser)
  
module.exports = router;
