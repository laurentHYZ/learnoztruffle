// hardhat.config.js
+ const { alchemyApiKey, mnemonic } = require('./secrets.json');
...
  module.exports = {
+    networks: {
+     rinkeby: {
+       url: 'https://eth-ropsten.alchemyapi.io/v2/2GtBvvPMn1Dc1RSBrXCSniZFYUhjJqPL',
+       accounts: {mnemonic: 'salon hat pride hub much square awesome buzz bomb giggle syrup pull'}
+     }
+  },
...
};
