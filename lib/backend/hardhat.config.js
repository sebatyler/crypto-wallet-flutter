require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      // from .env file
      url: process.env.RINKEBY_URL,
      accounts: [process.env.PRIVATE_KEY],
    }
  },
  etherscan: {
    // apiKey: process.env.ETHERSCAN_API_KEY,
    // https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-etherscan#adding-support-for-other-networks
    apiKey: {
      rinkeby: process.env.ETHERSCAN_API_KEY
    },
    customChains: [
      {
        network: "rinkeby",
        chainId: 4,
        urls: {
          apiURL: "https://api-rinkeby.etherscan.io/api",
          browserURL: "https://rinkeby.etherscan.io"
        }
      }
    ]
  }
};
