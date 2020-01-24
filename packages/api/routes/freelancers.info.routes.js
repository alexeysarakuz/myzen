const express = require('express');
const router = express.Router();

// Controllers
const FreelancesController = require('../controllers/freelancers.info.controller');

router.get('/getPopular', FreelancesController.getPopularFreelancersLimited);
router.get('/getByTag', FreelancesController.getFreelancerByTags);
router.post('/set', FreelancesController.setFreelancer);

module.exports = router;
