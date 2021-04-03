// hardhat.config.js
+ const { alchemyApiKey, mnemonic } = require('./secrets.json');
...
  module.exports = {
+    networks: {
+     rinkeby: {
+       url: 'https://eth-ropsten.alchemyapi.io/v2/${alchemyApiKey}',
+       accounts: {mnemonic: mnemomics}
+     }
+  },
...
};
