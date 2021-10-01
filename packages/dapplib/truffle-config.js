require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name razor toss coach just knee oppose genre'; 
let testAccounts = [
"0xd23b1e82a3632ad2ba36d2cc6e18b8dcf3675154d121567223971de40ba923bb",
"0x9f8e182529e687ff08196f0b7e2ad9d03ab1285e5c026c4b993e2874050b9b66",
"0x6b11305f1e19d49c4aa492a01c8ecfff8db4df2c805bdfa0a4f3384f08ce176f",
"0xc8f9269fb8deaad2ebe94a1ba49e09c65f953183dc18b3e90fe1a3110544e789",
"0x58827221a12a278953e82be61b3f38a459cf895e52dfc0c356821e193713a8e7",
"0xb124768186a69b727463b46ace769e6243eda26b08139c2d8c34924f5c8cc257",
"0x6724e0cf32e79ec6e277d5d32530a62da2075ac785b58f698e2e77891d3a424b",
"0x4019f1e44c38ce6dbbec147a218bc3ca29a982a1c4ddf70e32a048825251becd",
"0xe56cca29dc5172feac58e28bb93474a42770044fd9dc103543f2511034a8d3c5",
"0x89eef4e7e3b43b53001a89cffe37c11a9520af52c24e29d3d74ed321ff10a04e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

