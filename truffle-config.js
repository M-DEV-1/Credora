module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,  // Make sure this matches your Ganache port
      network_id: "*",
      gas: 6721975,  // Adding explicit gas limit
      gasPrice: 20000000000  // 20 gwei
    }
  },
  compilers: {
    solc: {
      version: "0.8.19",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  }
};