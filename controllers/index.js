const { User } = require('../models');
const sharp = require('sharp');

class Controller {
  static async createUser(req, res, next) {
    const { name, dateOfBirth, phoneNumber, city, education } = req.body;
    try {
      let inputImg = [];
      let dir = 'sharpImg';
      let data1 = await sharp(req.file.path)
        .resize({ width: 500, height: 500 })
        .toFile(`${dir}/${req.file.originalname.slice(0, -4)}-500.jpg`);
      data1.path = `${dir}/${req.file.originalname.slice(0, -4)}-500.jpg`;
      inputImg.push(data1.path);

      let data2 = await sharp(req.file.path)
        .resize({ width: 1000, height: 1000 })
        .toFile(`${dir}/${req.file.originalname.slice(0, -4)}-1000.jpg`);
      data2.path = `${dir}/${req.file.originalname.slice(0, -4)}-1000.jpg`;
      inputImg.push(data2.path);

      let age = Math.abs(new Date().getFullYear() - new Date(dateOfBirth).getFullYear());
      const input = { name, age, dateOfBirth, phoneNumber, city, education, image: inputImg };

      await User.create(input);
      res.status(201).json({ message: 'Success create user' });
    } catch (err) {
      next(err);
    }
  }

  static async listUsers(req, res, next) {
    try {
      const users = await User.findAll();
      res.status(201).json(users);
    } catch (err) {
      next(err);
    }
  }

  static async replaceUser(req, res, next) {
    const { id } = req.params;
    const { name, dateOfBirth, phoneNumber, city, education } = req.body;
    try {
      let userById = await User.findByPk(id);
      if (!userById) {
        throw { name: 'UserNotFound' };
      } else {
        let inputImg = [];
        let dir = 'sharpImg';
        let data1 = await sharp(req.file.path)
          .resize({ width: 500, height: 500 })
          .toFile(`${dir}/${req.file.originalname.slice(0, -4)}-500.jpg`);
        data1.path = `${dir}/${req.file.originalname.slice(0, -4)}-500.jpg`;
        inputImg.push(data1.path);

        let data2 = await sharp(req.file.path)
          .resize({ width: 1000, height: 1000 })
          .toFile(`${dir}/${req.file.originalname.slice(0, -4)}-1000.jpg`);
        data2.path = `${dir}/${req.file.originalname.slice(0, -4)}-1000.jpg`;
        inputImg.push(data2.path);

        let age = Math.abs(new Date().getFullYear() - new Date(dateOfBirth).getFullYear());
        const input = { name, age, dateOfBirth, phoneNumber, city, education, image: inputImg };

        res.status(201).json({ message: 'Success edit user' });
        await User.update(input, { where: { id } });
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
