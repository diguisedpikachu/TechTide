const express = require('express');
const path = require('path');

// handle routes
const homeRouter = require('./routes/homeRouter');
const financeRouter = require('./routes/financeRouter');

const app = express();

const PORT = 3000;

const db = require('./models/FinanceModel.js')

// Handle parsing of request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static files
app.use(express.static(path.resolve(__dirname, '../dist')));

// route handlers
app.use('/home', homeRouter);
app.use('/finance', financeRouter);


app.get('/purchase', async (req, res) => {

    const messageQuery = 'SELECT * from purchases2'
    const query = await db.query(messageQuery);
    // res.locals.databaseInfo = query;

    res.status(200).send('Hello is me');
}); 




// Catch-all route handler
app.use('/*', (req, res) => {
    return res.status(404).send('Page not found - 404');
});


// Global Error Handler
app.use((err, req, res, next) => {
const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
};
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

// Server listening on PORT 3000
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});
  
module.exports = app;