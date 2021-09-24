// module.exports = {
//   "stories": [
//     "../stories/**/*.stories.mdx",
//     "../stories/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials"
//   ],
// }
//-------------------------------------------------------------------------------------------------

// const path = require('path');

// // Export a function. Accept the base config as the only param.
// module.exports = {
//   stories: [
//     "../stories/**/*.stories.mdx",
//     "../stories/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   addons:[
//     "@storybook/addon-links",
//     "@storybook/addon-essentials"
//   ],
//   webpackFinal: async (config, { configType }) => {
    
//     config.module.rules.push({
//       test: /\.scss$/,
//       use: ['style-loader', 'css-loader', 'sass-loader'],
//       include: path.resolve(__dirname, '../'),
//     });

//     return config;
//   },
// };

//----------------------------------------------------------------------------------------------------


const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons:[
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config) => {

    config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
          });

  

    return config;
  },
};



