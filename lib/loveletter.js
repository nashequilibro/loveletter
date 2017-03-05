const words = require('./words');
const helper = require('./helper');

const pick = function(word) {
  let initialArray = words.english[word]
  let index = helper.rollInteger(0,initialArray.length - 1)
  return words.english[word][index]
}

// Build your letters from this pieces (letter1() is a complete but unpolished piece)

module.exports = {
  letter1: () => {
    return `${pick('temperature')} ${pick('month')} ${pick('weatherphaenomena')} &mdash; ${pick('color')} ${pick('landscape')} ${pick('emotion')}.<br><br> Like ${pick('flower')} with ${pick('bursting')}  expectations I ${pick('shove')} through an uncontrollable ${pick('fog')} of ${pick('humbleness')} as i walk on the ${pick('empty')} ${pick('streets')} of ${pick('capital')}. Everywhere i look a ${pick('sexy')} ${pick('animal')} oddly makes an appearance.<br>But wait! The ${pick('sexy')} ${pick('animal')} does not sound like i ${pick('remember')} it. I am ${pick('lost')} in this ${pick('scenery')}.<br>For a long time my ${pick('glowing')} ${pick('heart')} has been beating in the purest of passions. In another part of the ${pick('world')} a ${pick('confused')} ${pick('animal')} ${pick('shouts')} ${pick('loudly')} next to a ${pick('flaming')} bonfire. Let us ${pick('begin')} this magic ${pick('dance')} of ${pick('tenderness')}.<br>Again, when we and our souls ${pick('unite')} in the ${pick('shadow')} of that ${pick('askew')}  ${pick('tree')} and proclaim our never ending ${pick('lust')}. ${pick('overwhelming')} powers can not ${pick('pull')} us away from the wonders of birth and ${pick('wild')}, ${pick('horny')} Unicorns.`
  },
  exp1: () => {
    return `The ${pick('spirit')} of ${pick('bird')} left my ${pick('soul')} today, ${pick('total')} ${pick('depression')} surrounds me. ${pick('animal')} ${pick('meet')} at the ${pick('water')} framed by a ${pick('color')} ${pick('sky')}.<br>`
  },
  exp2: () => {
    return `When stars and spanglers ${pick('rise')} on the ${pick('clean')} and ${pick('dark')} ${pick('season')} ${pick('sky')}. I ${pick('walk')} hand in hand with you my ${pick('sunshine')}. You ${pick('shine')} for me like the ${pick('flaming')} ${pick('sun')} in my ${pick('dreams')}, baby.<br>`
  },
  climax: () => {
    return `${pick('wait')} - What does this ${pick('marvelous')} ${pick('scene')} ${pick('tell')}?<br>
    The ${pick('animal')} ${pick('shouts')} out ${pick('loudly')}:<br>`
  },
  end1: () => {
    return `Let's ${pick('dive')} through that ${pick('stormy')} ${pick('sea')} of ${pick('cruelness')} - together - through the ${pick('color')} ${pick('gate')} of ${pick('salvation')} until we reach that ${pick('magical')} ${pick('place')} where we ${pick('celebrate1')} a ${pick('emotional')} ${pick('feast')} and ${pick('celebrate2')} ${pick('unification')}.<br>`
  },
  end2: () => {
    return `The bed of ${pick('flowers')} and 1000 ${pick('candles')} are ${pick('waiting')} for our ${pick('glorious')} ${pick('explosion')} of love, surrounded by a flock of ${pick('animal')} ${pick('whispering')} the ${pick('magical')} words:<br> The ${pick('heaven')} is ${pick('burning')} for you my ${pick('princess')}.`
  },
}
