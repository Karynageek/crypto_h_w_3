//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT721 is ERC721 {
    uint256 public tokenCounter;

    mapping(uint256 => string) private _tokenURIs;

    event PermanentURI(string _value, uint256 indexed _id);

    constructor() ERC721("Triangle", "TRI") {}

    function mint(string memory _tokenURI) public returns (uint256) {
        uint256 newTokenID = tokenCounter + 1;

        _safeMint(msg.sender, newTokenID);

        tokenCounter = newTokenID;

        _tokenURIs[newTokenID] = _tokenURI;

        emit PermanentURI(_tokenURI, newTokenID);

        return newTokenID;
    }

    function tokenURI(uint256 _tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(_tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        string memory _tokenURI = _tokenURIs[_tokenId];

        return bytes(_tokenURI).length > 0 ? _tokenURI : "";
    }
}
