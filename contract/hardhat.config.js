require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/IBrOUyQ8X9xwZ9tw0SXOKn2qwMrH5IlC',
      accounts: [
        '58fd6300e32d2ae2b507e781b895e4756a25901312b7311af80b00f0d3bb3888',
      ],
    },
  },
};
