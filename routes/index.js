const express = require('express');
const router = express.Router();

const Controller = require('../controllers');
const cpUpload = require('../middlewares/multer');

router.post('/create', cpUpload, Controller.createUser);
router.get('/users', Controller.listUsers);
router.put('/replace/:id', cpUpload, Controller.replaceUser);

module.exports = router;
