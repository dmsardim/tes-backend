const errorHandler = (err, req, res, next) => {
  const multer = require('multer');
  let status = 500;
  let message = 'Internal server error';
  if (!req.body.image) {
    status = 400;
    message = 'Image is required';
  }
  if (err instanceof multer.MulterError) {
    // A Multer error occurred when uploading.
    status = 400;
    message = 'Can only choose one image';
  } else if (err) {
    // An unknown error occurred when uploading.
    console.log(err, '<<<<<');
  }

  switch (err.name) {
    case 'SequelizeValidationError':
      status = 400;
      err.errors.forEach((x) => (message = x.message));
      break;
    case 'UserNotFound':
      status = 404;
      message = 'User not found';
      break;
    case 'NameRequired':
      status = 400;
      message = 'Name is required';
      break;
    case 'DateOfBirthRequired':
      status = 400;
      message = 'Date of birth is required';
      break;
    case 'PhoneNumberRequired':
      status = 400;
      message = 'Phone number is required';
      break;
    case 'CityRequired':
      status = 400;
      message = 'City is required';
      break;
    case 'EducationRequired':
      status = 400;
      message = 'Education is required';
      break;
  }

  res.status(status).json({
    message: message,
  });
};

module.exports = errorHandler;
