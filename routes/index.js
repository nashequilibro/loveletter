var express = require('express');
var router = express.Router();

const words = require('../lib/words');
const helper = require('../lib/helper');
const loveletter = require('../lib/loveletter');
var pick = function(word) {
  let initialArray = words.english[word]
  let index = helper.rollInteger(0,initialArray.length - 1)
  return words.english[word][index]
}

/* GET home page. */
router.get('/', function(req, res, next) {
  var exp = ''
  if (helper.coinflip()) {
    exp = loveletter.exp1()
  } else {
    exp = loveletter.exp2()
  }
  var end = ''
  if (helper.coinflip()) {
    end = loveletter.end1()
  } else {
    end = loveletter.end2()
  }
  let love = exp + loveletter.climax() + end
  res.render('index', {
    loveletter: love,
    title: 'A fine loveletter',
  });
});

module.exports = router;
