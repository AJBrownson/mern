const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.route('/cool') .get ((req, res, next) => {
  res.send('You are so cool');
});

router.get('/node', (req, res, next) => {
  res.send('reckless behaviour');
});

module.exports = router;