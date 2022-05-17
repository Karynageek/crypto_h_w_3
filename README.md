# TOKEN DEPLOYED ON RINKEBY TESTNET

**Etherscan:**
**Contract ERC-721:**<br/> 
<a href="https://rinkeby.etherscan.io/address/0xb70bbeb1bc2bc6706826a9011389970215198022#code">https://rinkeby.etherscan.io/address/0xb70bbeb1bc2bc6706826a9011389970215198022#code</a>

**Contract ERC-1155:**<br/> 
<a href="https://rinkeby.etherscan.io/address/0x846661D655BEf1Ccfac7897983d103309f31af8a#code">https://rinkeby.etherscan.io/address/0x846661D655BEf1Ccfac7897983d103309f31af8a#code</a>

**OpenSea:**
**Contract ERC-721:**<br/> 
<a href="https://testnets.opensea.io/collection/triangle-bpgxfb8hca">https://testnets.opensea.io/collection/triangle-bpgxfb8hca</a>

**Contract ERC-1155:**<br/> 
<a href="https://testnets.opensea.io/collection/geometric-shapes-ezndiofa2u">https://testnets.opensea.io/collection/geometric-shapes-ezndiofa2u</a>

# PROJECT DEPLOYMENT FLOW

1. Clone the project from GitHub
2. Install dependencies
3. Customize configurations
4. Deploy

# 1. Clone the project from GitHub

Enter the following command in the terminal:

```shell
git clone https://github.com/Karynageek/crypto_h_w_3.git
```

# 2. Install dependencies

Before launch next command open the terminal into the the main folder of project
Then, enter:

```shell
npm install
```

# 3. Customize configurations

In this project:

1. rename the .env.example file to a file named .env
2. in the .env file change:

a) To get the Etherscan API key, go to
<a href="https://etherscan.io/myapikey">https://etherscan.io/myapikey</a>

c) your mnemonic of the account which will send the deployment transaction

# 4. Deploy

# DEPLOY ON RINKEBY TESTNET

```shell
npx hardhat run scripts/deploy_nft721.ts --network rinkeby
npx hardhat run scripts/deploy_nft1155.ts --network rinkeby
```

# VERIFICATION

Verification is automated
