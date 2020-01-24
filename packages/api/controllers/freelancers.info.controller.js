const mongoose = require('mongoose');
const Freelancers = require('../models/freelancers.info.model');

exports.getPopularFreelancersLimited = (req, res, next) => {
  Freelancers.aggregate([
    {
      $lookup: {
        from: 'accounts',
        localField: 'account_id',
        foreignField: '_id',
        as: 'fromAccounts',
      },
    },
    {
      $replaceRoot: {
        newRoot: {
          $mergeObjects: [{ $arrayElemAt: ['$fromAccounts', 0] }, '$$ROOT'],
        },
      },
    },
    {
      $project: { fromAccounts: 0 },
    },
  ])
    .limit(20)
    .sort({ rating: -1 })
    .then(freelancers => {
      if (freelancers.length > 0) {
        res.status(200).json({
          message: 'Got successfully',
          data: {
            quantity: freelancers.length,
            freelancers,
          },
        });
      } else {
        res.status(200).json({
          message: 'There are no results',
          data: {
            quantity: 0,
            freelancers: [],
          },
        });
      }
    });
};

exports.setFreelancer = (req, res, next) => {
  const tags = req.body.tags;
  const account_id = req.body.account_id;

  const freelancerAcc = new Freelancers({
    _id: new mongoose.Types.ObjectId(),
    account_id,
    tags,
    rating: 10,
  });

  freelancerAcc.save().then(result => {
    res.status(200).json({
      message: 'Got successfully',
      data: {
        freelancer: {
          tags: tags,
          account_id: account_id,
        },
        res: result,
      },
    });
  });
};

exports.getFreelancerByTags = (req, res, next) => {
  const tags = req.query.tags;
  console.log(tags);

  Freelancers.aggregate([
    {
      $match: { tags: { title: tags } },
    },
    {
      $lookup: {
        from: 'accounts',
        localField: 'account_id',
        foreignField: '_id',
        as: 'fromAccounts',
      },
    },
    {
      $replaceRoot: {
        newRoot: {
          $mergeObjects: [{ $arrayElemAt: ['$fromAccounts', 0] }, '$$ROOT'],
        },
      },
    },
    {
      $project: { fromAccounts: 0 },
    },
  ])
    .limit(20)
    .sort({ rating: -1 })
    .then(freelancers => {
      if (freelancers.length > 0) {
        res.status(200).json({
          message: 'Got successfully',
          data: {
            tags: tags,
            quantity: freelancers.length,
            freelancers,
          },
        });
      } else {
        res.status(200).json({
          message: 'There are no results',
          data: {
            tags: tags,
            quantity: 0,
            freelancers: freelancers,
          },
        });
      }
    });
};
