let quotes = require('../data/quotes');

function quotesIndex(req, res){
  res.render('pages/index', { quotes });
}

function quotesNew(req, res){
  res.render('pages/new');
}


function newQuote(req, res){
  let quote = req.body.quote;
  quote.id = quotes.length;
  quotes.push(quote);
  res.redirect(302, '/quotes');
}

module.exports = {
  index: quotesIndex,
  new: quotesNew,
  create: newQuote
};
