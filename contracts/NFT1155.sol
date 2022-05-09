//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract NFT1155 is ERC1155 {
    uint256 public constant Circle = 0;
    uint256 public constant Square = 1;
    uint256 public constant Triangle = 2;

    constructor()
        ERC1155(
            "ipfs://bafybeibvwbzitoca3gpo3ogpbqcw7lihwh4jfqtj4ppvrlz5yz7wncc7mm/{id}.json"
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
                    "ipfs://bafybeibvwbzitoca3gpo3ogpbqcw7lihwh4jfqtj4ppvrlz5yz7wncc7mm/",
                    Strings.toString(_tokenId),
                    ".json"
                )
            );
    }
}
