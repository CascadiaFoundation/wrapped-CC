const { argv } = require("yargs");
require('dotenv').config()

const HDWalletProvider = require('@truffle/hdwallet-provider')
const MNEMONIC = process.env.MNEMONIC

module.exports = {
  networks: {
    mainnet: {
      host: "localhost",
      port: 8545,
      network_id: "1"
    },
    ropsten: {
      host: "localhost",
      port: 8545,
      network_id: "3"
    },
    kovan: {
      host: "localhost",
      port: 8545,
      network_id: "42"
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: "4"
    },
    cascadia: {
      provider: () => new HDWalletProvider(MNEMONIC, 'https://devnet.cascadia.foundation'),
      network_id: '*',
    },
  },
  compilers: {
    solc: {
      version: argv.solcVersion
    }
  }
};
