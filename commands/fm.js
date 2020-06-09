const y = require('../core/base');

module.exports = (_y, args) => {
  const ids = [
		//'bronze',
      21181849,
      21186969,
      21206425,
      21236946,
      21220306,
      21221589,
      21228757,
      21250774,
      21245893,
      21232325,
      21240262,
      21238983,
      21240775,
      21229429,
      21245862,
      21233667,
      21248268,
      21248272,
      21251867,
      21242106,
      21242874,
      21243898,
      21244927,
      21251840,
      21245510,
      21251824,
      21244809,
      21251980,
      21245426,
      21248408,
      21239515,
      21252911,
    //'silver',
      21196976,
      21228464,
      21229488,
      21101488,
      21242289,
      21229349,
      21111590,
      21248550,
      21201958,
      21240035,
      21243619,
      21193187,
      21201891,
      21220638,
      21234463,
      21220895,
      21226783,
      21239631,
      21245008,
      21228625,
      21232360,
      21235689,
      21213763,
      21193277,
      21232360,
      21246951,
      21242191,
      21235290,
      21234059,
      21201179,
      21239838,
      21501653,
      21501309,
    //'gold',
      21202646,
      21208534,
      21231318,
      21230147,
      21220932,
      21200197,
      21193158,
      21137351,
      21172937,
      21217605,
      21188166,
      21236920,
      21215417,
      21238095,
      21184501,
      21213353,
      21192883,
      21242444,
      21194333,
      21186648,
      21198420,
      21230613,
      21212616,
      21189881,
      21220018,
      21205402,
      21501052,
      21500491,
      21501642,
      21501490,
      21500459,
      21501297,
      21500112,
    //'elite',
      21500257,
      21206113,
      21500684,
      21501964,
      21501710,
      21500978,
      21501994,
      21501734,
      21501294,
      21501044,
      21501178,
    //'elite85',
      21502425,
      21501408,
      21502350,
      21500565,
      21501338,
      21500480,
      21501885,
      21500353,
      21501334,
      21502204,
    //'master',
      21500962,
      21501987,
      21501220,
      21501347,
      21500742,
      21501572,
      21500140,
      21501365,
      21502062,
      21500551,
      21501160,
      21500828,
    //'master95',
      21501958,
      21501720,
      21501511,
      21500728,
      21501769,
      21501868,
      21502275,
      21500874,
      21500482,
      21501511,
      21502077,
    //'legend',
    21502272,
    21502458,
    21502385,
    //'icon',
    21502635,
    21502193,
    21502634,
    21502631,
    //'prime',
      21500198,
      21501546,
      21502457,
      21502055,
      21501668,
      21502188,
      21502076,
  ];
	const id = ids[
		Math.floor(Math.random() * ids.length)
	];
  const D = y.Discord;
  const url = 
    'https://fifa-mobile.github.io/images/cards/'
    +
    `${id}.png`
  ;
  const embed = new D.RichEmbed()
    .setColor('#0099ff')
    .setTitle('Free Pack')
    .setImage(url)
    .setURL(url)
  ;
	_y.reply(embed);
};
