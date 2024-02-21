const financeController = {};
const db = require('../models/FinanceModel.js');

financeController.makePurchase = async (req, res, next) => {
  try {
      const { name, price, category } = req.body;
      const query = 'INSERT INTO purchases2 (name, price, category) VALUES($1, $2, $3) RETURNING *';
      const values = [ name, price, category ];
      const response = await db.query(query, values);
      res.locals.purchased = response;
      return next();
  } catch(err) {
    return next({ message: {
        err: 'Problem with makePurchase in financeController'
    }})
  }
}

financeController.getPurchaseList = async (req, res, next) => {
  try {
    const response = await db.query('SELECT * FROM purchases2');
    res.locals.purchaseList = response;
    return next();
  } catch(err) {
    return next({ message: {
        err: 'Problem with getPurchaseList in financeController'
    }})
  }
}

module.exports = financeController;