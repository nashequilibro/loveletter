module.exports = {
  coinflip: function() {
    return Math.random() < 0.5;
  },
  rollInteger: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
}
