import { expect } from "chai";
import { ethers } from "hardhat";
import { NFT1155__factory } from "../typechain-types/factories/contracts/NFT1155__factory";
import { NFT1155 } from "../typechain-types/contracts/NFT1155";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe('ERC1155 contract', () => {
  let nft: NFT1155;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addrs: SignerWithAddress[];

  beforeEach(async () => {
    [owner, addr1, ...addrs] = await ethers.getSigners();

    const Nft = (await ethers.getContractFactory('NFT1155')) as NFT1155__factory;
    nft = await Nft.deploy();

    await nft.deployed();
  });

  describe('mints', () => {
    it('mints successfully', async () => {
      for (let i = 0; i < 3; i++) {
        let tokenURI = "ipfs://bafybeibvwbzitoca3gpo3ogpbqcw7lihwh4jfqtj4ppvrlz5yz7wncc7mm/" + i + ".json";

        expect(tokenURI).to.equal(await nft.uri(i));
      }
    })
  })
});
