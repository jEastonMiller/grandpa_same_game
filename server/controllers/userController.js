const userController = {};

//****** LOGIN ******//
userController.login = async function (req, res, next) {
  console.log('hello from the controller');
  res.locals.test = 'howdy';
  return next();
}


module.exports = userController;