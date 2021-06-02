// const withPlugins = require('next-compose-plugins');
// const nextImg = require('next-img/plugin');

// module.exports = withPlugins([
//   [
//     nextImg,
//     {
//       // specify the default breakpoints
//       breakpoints: [768],
//     },
//   ],
// ]);

const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([optimizedImages]);
