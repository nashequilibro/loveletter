const words = require('./words');
const helper = require('./helper');

const pick = function(word) {
  let initialArray = words.english[word]
  let index = helper.rollInteger(0,initialArray.length - 1)
  return words.english[word][index]
}

module.exports = {
  letter1: () => {return `${pick('temperature')} ${pick('month')} ${pick('weatherphaenomena')} &mdash; ${pick('color')} ${pick('landscape')} ${pick('emotion')}.<br><br> Like ${pick('flower')} with ${pick('bursting')}  expectations I ${pick('shove')} through an uncontrollable ${pick('fog')} of ${pick('humbleness')} as i walk on the ${pick('empty')} ${pick('streets')} of ${pick('capital')}. Everywhere i look a ${pick('sexy')} ${pick('animal2')} oddly makes an appearance.<br>But wait! The ${pick('sexy')} ${pick('animal2')} does not sound like i ${pick('remember')} it. I am ${pick('lost')} in this ${pick('scenery')}.<br>For a long time my ${pick('glowing')} ${pick('heart')} has been beating in the purest of passions. In another part of the ${pick('world')} a ${pick('confused')} ${pick('animal3')} ${pick('shout')} ${pick('loudly')} next to a ${pick('flaming')} bonfire. Let us ${pick('begin')} this magic ${pick('dance')} of ${pick('tenderness')}.<br>Again, when we and our souls ${pick('unite')} in the ${pick('shadow')} of that ${pick('askew')}  ${pick('tree')} and proclaim our never ending ${pick('lust')}. ${pick('overwhelming')} powers can not ${pick('pull')} us away from the wonders of birth and ${pick('wild')}, ${pick('horny')} Unicorns.`},
}
