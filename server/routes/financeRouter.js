const express = require('express');
const router = express.Router();
const financeController = require('../controllers/financeController.js');

router.post('/', financeController.makePurchase, financeController.getPurchaseList, (req, res) => {
  res.status(200).json(res.locals.purchaseList);
});

router.post('/makePurchase', financeController.makePurchase, financeController.getPurchaseList, (req, res) => {
  res.status(200).json(res.locals.purchaseList);
});

module.exports = router;