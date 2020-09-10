const y = require('../core/base');
const cards = require('../data/cards');

module.exports = (_y, args) => {
  let id = args[0];
  const ids = [];
  for (let i = 0; i < cards.length; i++) {
    const part = cards[i];
    for (let j = 0; j < part.length; j++) {
      const card = part[j];
      ids.push(card);
    }
  }
  if (!id) {
    id = ids[
      Math.floor(Math.random() * ids.length)
    ];
  }

  if (id.length > 20) {
    id = id.substring(34);
  }

  id = Number(id);

  console.log(
    ids
    , typeof id
    , id
    , ids.indexOf(id)
  );

  if (ids.indexOf(id) < 0) {
    return _y.reply(
      `Can't find the player with id#${id}`
    );
  }

  const D = y.Discord;
  const url = 
    'https://fifa-mobile.github.io/images/cards/'
    +
    `${id}.png`
  ;
  const embed = new D.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Get this card using $pack command!')
    .setImage(url)
    .setURL(url)
  ;
	_y.reply(embed);
};
