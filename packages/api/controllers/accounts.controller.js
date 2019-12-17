const mongoose = require('mongoose');
const Account = require('../models/account.model');
const bcrypt = require('bcrypt');

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (email && password) {
    Account.find({ email: email })
      .exec()
      .then(user => {
        if (user.length < 1) {
          res.status(401).json({
            message: 'Login failed. Check the entered data',
          });
        } else {
          bcrypt.compare(password, user[0].password, function(
            err,
            hashCheckResult,
          ) {
            if (err) {
              res.status(501).json({
                message: 'Login failed. Try again later',
              });
            }
            if (hashCheckResult) {
              res.status(200).json({
                message: 'Logined successfully',
                data: {
                  name: user[0].name,
                  email,
                },
              });
            } else {
              res.status(401).json({
                message: 'Login failed. Check the entered data',
              });
            }
          });
        }
      })
      .catch(err => {
        res.status(501).json({
          message: 'Login failed. Try again later',
        });
      });
  } else {
    res.status(500).json({
      message: 'Login failed. Check the entered data',
    });
  }
};

exports.register = (req, res, next) => {
  const name = req.body.name;
  const surname = req.body.surname;
  const email = req.body.email;
  const password = req.body.password;

  Account.find({ email: email })
    .exec()
    .then(accRes => {
      if (!accRes || accRes.length === 0) {
        bcrypt.hash(password, 10, (err, hash) => {
          if (err) {
            res.status(501).json({
              general: 'Error. Something went wrong. Try again later',
            });
          } else {
            const user = new Account({
              _id: new mongoose.Types.ObjectId(),
              name: name,
              surname: surname,
              email: email,
              password: hash,
            });
            user
              .save()
              .then(results => {
                res.status(201).json({
                  message: 'Account has been created succesfully',
                  data: {
                    name,
                    surname,
                    email,
                  },
                });
              })
              .catch(results => {
                res.status(500).json({
                  general: 'Error. Something went wrong. Try again later',
                });
              });
          }
        });
      } else {
        res.status(409).json({
          email: 'Error. Account with current email is already exists',
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: 'Error. Something went wrong. Try again later',
      });
    });
};
