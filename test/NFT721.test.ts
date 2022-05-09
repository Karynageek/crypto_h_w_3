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
  const tokenURI = "ipfs://bafkreib7rk44lfgqzt6jfvma4khx6sgag6edmp4d2avt67flk5wueqfjc4";

  beforeEach(async () => {
    [owner, addr1, ...addrs] = await ethers.getSigners();

    const Nft = (await ethers.getContractFactory('NFT721')) as NFT721__factory;
    nft = await Nft.deploy();

    await nft.deployed();
  });

  describe('mints', () => {
    it('mints successfully', async () => {
      const ownerBalanceBefore = await nft.balanceOf(owner.address);

      const tokenId = await nft.callStatic.mint(tokenURI);
      const result = await nft.mint(tokenURI);

      const tokenCount = await nft.tokenCounter();

      const ownerBalanceAfter = await nft.balanceOf(owner.address);

      expect(ownerBalanceAfter).to.equal(ownerBalanceBefore.add(tokenCount));
      expect(tokenURI).to.equal(await nft.tokenURI(tokenId));

      await expect(result).to.emit(nft, "PermanentURI")
        .withArgs(tokenURI, tokenId);
    })

  })

  describe('gets token URI', () => {
    it('gets token URI successfully', async () => {
      const tokenId = await nft.callStatic.mint(tokenURI);
      await nft.mint(tokenURI);

      expect(tokenURI).to.equal(await nft.tokenURI(tokenId));
    })

    it('rejects nonexistent token', async () => {
      await expect(nft.tokenURI(1000)).to.be.revertedWith('ERC721Metadata: URI query for nonexistent token');
    })
  })

});
