import hre, { ethers } from "hardhat";
import { NFT721__factory } from "../typechain-types/factories/contracts/NFT721__factory";
import { NFT1155__factory } from "../typechain-types/factories/contracts/NFT1155__factory";

async function main() {
  const delay = (ms: any) => new Promise((res) => setTimeout(res, ms));

  const Nft721 = (await ethers.getContractFactory('NFT721')) as NFT721__factory;
  const nft721 = await Nft721.deploy();

  await nft721.deployed();

  console.log("Nft 721 deployed to:", nft721.address);

  const Nft1155 = (await ethers.getContractFactory('NFT1155')) as NFT1155__factory;
  const nft1155 = await Nft1155.deploy();

  await nft1155.deployed();

  console.log("Nft 1155 deployed to:", nft1155.address);

  await delay(35000);

  await hre.run("verify:verify", {
    address: nft721.address,
    constructorArguments: [],
  });

  await hre.run("verify:verify", {
    address: nft1155.address,
    constructorArguments: [],
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
