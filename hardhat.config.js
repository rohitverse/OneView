/* eslint-disable no-unused-vars */
const fs = require('fs');
/* eslint-disable import/no-extraneous-dependencies */

require('@nomiclabs/hardhat-waffle');

const privateKey = fs.readFileSync('.secret').toString().trim();
require('dotenv').config({ path: '.env' });

const { BASE_URL } = process.env;

// const { ALCHEMY_API_KEY_URL } = process.env;

const { MUMBAI_PRIVATE_KEY } = process.env;
// const { BASE_URL } = process.env;
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },

    mumbai: {
      url: BASE_URL,
      accounts: [MUMBAI_PRIVATE_KEY],
    },
    // goerli: {
    //   url: ALCHEMY_GO_KEY_URL,
    //   accounts: [MUMBAI_PRIVATE_KEY],
    // },
  },
  solidity: '0.8.4',
};
