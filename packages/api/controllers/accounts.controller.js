exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  res.status(200).json({
    message: 'Logined successfully',
    data: {
      email,
      password,
    },
  });
};

exports.register = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  res.status(200).json({
    message: 'Registered successfully',
    data: {
      email,
      password,
    },
  });
};
