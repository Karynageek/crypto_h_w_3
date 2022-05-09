import { expect } from "chai";
import { ethers } from "hardhat";
import { NFT721__factory } from "../typechain-types/factories/contracts/NFT721__factory";
import { NFT721 } from "../typechain-types/contracts/NFT721";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe('Staking contract', () => {
  let nft: NFT721;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addrs: SignerWithAddress[];
  const tokenURI = "https://ipfs.io/ipfs/QmPShXrfttmnNtE9V6QmcrR8F29V7HMuMrsRyQyUXs35id";

  beforeEach(async () => {
    [owner, addr1, ...addrs] = await ethers.getSigners();

    const Nft = (await ethers.getContractFactory('NFT721')) as NFT721__factory;
    nft = await Nft.deploy();

    await nft.deployed();
  });

  describe('mints', () => {
    it('mints successfully', async () => {
      const ownerBalanceBefore = await nft.balanceOf(owner.address);

      const result = await nft.mint(tokenURI);

      const ownerBalanceAfter = await nft.balanceOf(owner.address);

      const tokenCount = await nft.tokenCounter();

      expect(ownerBalanceAfter).to.equal(ownerBalanceBefore.add(tokenCount));
      expect(tokenURI).to.equal(await nft.tokenURI(tokenCount));

      await expect(result).to.emit(nft, "PermanentURI")
        .withArgs(tokenURI, tokenCount);
    })

  })

  describe('gets token URI', () => {
    it('gets token URI successfully', async () => {
      await nft.mint(tokenURI);

      const tokenCount = await nft.tokenCounter();

      expect(tokenURI).to.equal(await nft.tokenURI(tokenCount));
    })

    it('rejects nonexistent token', async () => {
      await expect(nft.tokenURI(0)).to.be.revertedWith('ERC721Metadata: URI query for nonexistent token');
    })
  })

});
