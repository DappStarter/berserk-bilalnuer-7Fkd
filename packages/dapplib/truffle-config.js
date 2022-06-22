require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog orphan slab chase note meadow collect gesture gloom outer slice'; 
let testAccounts = [
"0x330124fbc4a3ec68d1b8c3bf1718ead192c6a61e0cb5151a094b44dd01f630df",
"0x081ba081c628107b88eeae46dfe4225ba40e99f82f14d44ea90c85b38243f330",
"0x6028fccc67b858a8897198405a9a72b7eeafa12d9702d6291ba18d5590035537",
"0x6bc354996a8d2b55cd183112d7b19a3ba7bdf7322348482206404c9bc800480c",
"0xc11ddb1b773a2ed868b538c5d4a343623872620d7d964317a700d5c66662ada1",
"0xf717a158326e2840b8c28e75d21e0a58a9b7900b0e8c6152466d8d05a2fe48e8",
"0x72c81283f283d472bd4c20e07341839169b310466cbde5aedc5faf7a7c9fcbb7",
"0xb1e04b7a3f013fc5cddfeef7155821bc4361039ee671a02c21329e7c197dfc9c",
"0x58271611d0283ecab7b730a402a5b00fdadeddba909a991c79ec5fc5d68d05fc",
"0x40027db92a48031672691fe7f87739ed821638cc0ee1daa965d6162799447a6e"
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

