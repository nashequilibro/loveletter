/**
 * Module for http requests to thesaurus
 * @module httplib
 * @author George Danzer
 * @version 0.0.1
 */

var request = require('request')
var mongoclient = require('../lib/mongoclient')

/**
 * Private functions
 */

/**
 * Public functions
 */

module.exports = {
  getSynonyms: function(word) {
    return new Promise(function(resolve, reject) {
      request({
        url: 'http://thesaurus.altervista.org/thesaurus/v1?word=' + word + '&language=en_US&output=json&key=ZYHzJJQ5g3icL6UpVHPi',
      }, function(err, res, data) {
        if (!err && res.statusCode == 200) {
          let synonyms = JSON.parse(data)
          resolve(synonyms)
        } else {
          reject('did not find synonyms')
        }
      });
    });
  },
};
