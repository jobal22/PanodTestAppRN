const jleo = require('./Images/nadpro.jpg');
const dora = require('./Images/cachepro.jpg');
const nadiya = require('./Images/nadiya.jpg');
const cache = require('./Images/cache.jpg');
const cachevid = require('./Images/cachevid.mp4');
const nadiyavid = require('./Images/nadiyavid.mp4');


export default {
  'users': [
    {
      'id': 1,
      'user': '@jleo612',
      'userpic': jleo,
      'movie': [
        {
          'id': 2,
          'title': "Nadiya's Time To Eat",
          'thumb': nadiya,
          'video': nadiyavid,
          'review': "NADIYA'S TIME TO EAT is an absolutely delightful cooking/baking show from past Great British Bake Off contestant and fan favorite, Nadiya Hussain. With her signature creative flair, lovely personality, brightly colored outfits, and of course her incredible talent in the kitchen, this show is seriously great. Plus, you'll get so many recipe ideas from it!",
        },
      ]
    },
    {
      'id': 3,
      'user': '@dora',
      'userpic': dora,
      'movie': [
        {
          'id': 4,
          'title': 'Caché',
          'thumb': cache,
          'video': cachevid,
          'review': 'https://vimeo.com/462051596',
        },
      ]
    },

  ]
}