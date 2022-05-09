//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract NFT1155 is ERC1155 {
    uint256 public constant Circle = 1;
    uint256 public constant Square = 2;
    uint256 public constant Triangle = 3;

    constructor()
        ERC1155(
            "https://ipfs.io/ipfs/bafybeiarzxfkbmn5zopuyaccge6ddy4l4br6cy4otidmn7btgrseozzxca/{id}.json"
        )
    {
        _mint(msg.sender, Circle, 1, "");
        _mint(msg.sender, Square, 1, "");
        _mint(msg.sender, Triangle, 1, "");
    }

    function uri(uint256 _tokenId)
        public
        pure
        override
        returns (string memory)
    {
        return
            string(
                abi.encodePacked(
                    "https://ipfs.io/ipfs/bafybeiarzxfkbmn5zopuyaccge6ddy4l4br6cy4otidmn7btgrseozzxca/",
                    Strings.toString(_tokenId),
                    ".json"
                )
            );
    }
}
