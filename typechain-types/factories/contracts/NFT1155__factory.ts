/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NFT1155, NFT1155Interface } from "../../contracts/NFT1155";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [],
    name: "Circle",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Square",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Triangle",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060800160405280605a81526020016200391c605a91396200003d816200021e60201b60201c565b50620000727f31852840714c968c830ff67ba27b231d61212f7326af84d75e590b489ace6f3260001b6200023a60201b60201c565b620000a67f77a5a375509ed9433e6f5efd96d09847c542d1e445e63655eeecb628f876b59060001b6200023a60201b60201c565b620000da7f249fb2d0ac9b138e4391fd045e1a6b936f32ea0dcf38f8203a6fe35613cd2ec260001b6200023a60201b60201c565b620000fe33600180604051806020016040528060008152506200023d60201b60201c565b620001327f0ae9dbd1f0849cc1abb8b3d7d29445388fb863a3671a8f9d6dde3459642f3d2c60001b6200023a60201b60201c565b620001667fceaa4f57974c62c128ee282c41900d14d9d11d3410d43209dfe16532e6915a1360001b6200023a60201b60201c565b6200018b3360026001604051806020016040528060008152506200023d60201b60201c565b620001bf7f67c085d7bfc204645d7f717f152c6e847b48f97ba2cbbdc45b9895816d403c2d60001b6200023a60201b60201c565b620001f37f033334cdfe7d62bf97f0faa13b7a8959fa962f81deb298317b7eede6f602547760001b6200023a60201b60201c565b620002183360036001604051806020016040528060008152506200023d60201b60201c565b62000e7e565b80600290805190602001906200023692919062000733565b5050565b50565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415620002b0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002a79062000a0b565b60405180910390fd5b6000620002c26200042560201b60201c565b90506000620002d7856200042d60201b60201c565b90506000620002ec856200042d60201b60201c565b90506200030583600089858589620004f660201b60201c565b8460008088815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825462000366919062000a9c565b925050819055508673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628989604051620003e692919062000a2d565b60405180910390a46200040583600089858589620004fe60201b60201c565b6200041c836000898989896200050660201b60201c565b50505050505050565b600033905090565b60606000600167ffffffffffffffff81111562000473577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015620004a25781602001602082028036833780820191505090505b5090508281600081518110620004e1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101818152505080915050919050565b505050505050565b505050505050565b620005328473ffffffffffffffffffffffffffffffffffffffff166200071060201b620008571760201c565b1562000708578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b81526004016200057b9594939291906200093f565b602060405180830381600087803b1580156200059657600080fd5b505af1925050508015620005ca57506040513d601f19601f82011682018060405250810190620005c79190620007fa565b60015b6200067c57620005d962000c92565b806308c379a014156200063d5750620005f162000dc2565b80620005fe57506200063f565b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620006349190620009a3565b60405180910390fd5b505b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200067390620009c7565b60405180910390fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161462000706576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620006fd90620009e9565b60405180910390fd5b505b505050505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b828054620007419062000b99565b90600052602060002090601f016020900481019282620007655760008555620007b1565b82601f106200078057805160ff1916838001178555620007b1565b82800160010185558215620007b1579182015b82811115620007b057825182559160200191906001019062000793565b5b509050620007c09190620007c4565b5090565b5b80821115620007df576000816000905550600101620007c5565b5090565b600081519050620007f48162000e64565b92915050565b6000602082840312156200080d57600080fd5b60006200081d84828501620007e3565b91505092915050565b620008318162000af9565b82525050565b6000620008448262000a64565b62000850818562000a7a565b93506200086281856020860162000b63565b6200086d8162000cb7565b840191505092915050565b6000620008858262000a6f565b62000891818562000a8b565b9350620008a381856020860162000b63565b620008ae8162000cb7565b840191505092915050565b6000620008c860348362000a8b565b9150620008d58262000cd5565b604082019050919050565b6000620008ef60288362000a8b565b9150620008fc8262000d24565b604082019050919050565b60006200091660218362000a8b565b9150620009238262000d73565b604082019050919050565b620009398162000b59565b82525050565b600060a08201905062000956600083018862000826565b62000965602083018762000826565b6200097460408301866200092e565b6200098360608301856200092e565b818103608083015262000997818462000837565b90509695505050505050565b60006020820190508181036000830152620009bf818462000878565b905092915050565b60006020820190508181036000830152620009e281620008b9565b9050919050565b6000602082019050818103600083015262000a0481620008e0565b9050919050565b6000602082019050818103600083015262000a268162000907565b9050919050565b600060408201905062000a4460008301856200092e565b62000a5360208301846200092e565b9392505050565b6000604051905090565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600062000aa98262000b59565b915062000ab68362000b59565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000aee5762000aed62000c05565b5b828201905092915050565b600062000b068262000b39565b9050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b8381101562000b8357808201518184015260208101905062000b66565b8381111562000b93576000848401525b50505050565b6000600282049050600182168062000bb257607f821691505b6020821081141562000bc95762000bc862000c34565b5b50919050565b62000bda8262000cb7565b810181811067ffffffffffffffff8211171562000bfc5762000bfb62000c63565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600060033d111562000cb45760046000803e62000cb160005162000cc8565b90505b90565b6000601f19601f8301169050919050565b60008160e01c9050919050565b7f455243313135353a207472616e7366657220746f206e6f6e204552433131353560008201527f526563656976657220696d706c656d656e746572000000000000000000000000602082015250565b7f455243313135353a204552433131353552656365697665722072656a6563746560008201527f6420746f6b656e73000000000000000000000000000000000000000000000000602082015250565b7f455243313135353a206d696e7420746f20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b600060443d101562000dd45762000e61565b62000dde62000a5a565b60043d036004823e80513d602482011167ffffffffffffffff8211171562000e0857505062000e61565b808201805167ffffffffffffffff81111562000e28575050505062000e61565b80602083010160043d03850181111562000e4757505050505062000e61565b62000e588260200185018662000bcf565b82955050505050505b90565b62000e6f8162000b0d565b811462000e7b57600080fd5b50565b612a8e8062000e8e6000396000f3fe608060405234801561001057600080fd5b50600436106100a85760003560e01c80634e1273f4116100715780634e1273f4146101775780638b95bb4f146101a7578063a22cb465146101c5578063e5269831146101e1578063e985e9c5146101ff578063f242432a1461022f576100a8565b8062fdd58e146100ad57806301ffc9a7146100dd5780630d5c13181461010d5780630e89341c1461012b5780632eb2c2d61461015b575b600080fd5b6100c760048036038101906100c29190611a7a565b61024b565b6040516100d4919061215b565b60405180910390f35b6100f760048036038101906100f29190611b22565b610314565b6040516101049190611fde565b60405180910390f35b6101156103f6565b604051610122919061215b565b60405180910390f35b61014560048036038101906101409190611b74565b6103fb565b6040516101529190611ff9565b60405180910390f35b610175600480360381019061017091906118f0565b6104b0565b005b610191600480360381019061018c9190611ab6565b610551565b60405161019e9190611f85565b60405180910390f35b6101af610702565b6040516101bc919061215b565b60405180910390f35b6101df60048036038101906101da9190611a3e565b610707565b005b6101e961071d565b6040516101f6919061215b565b60405180910390f35b610219600480360381019061021491906118b4565b610722565b6040516102269190611fde565b60405180910390f35b610249600480360381019061024491906119af565b6107b6565b005b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156102bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b39061205b565b60405180910390fd5b60008083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60007fd9b67a26000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103df57507f0e89341c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103ef57506103ee8261087a565b5b9050919050565b600181565b60606104297fa56bd8a915354ea50490724495e19e50d520113220d4812c636dcfa981c62fae60001b6108e4565b6104557fd0bd0f4179aeda4c0ff40d2530599e5d14394916769eff95e3cd593106380e3d60001b6108e4565b6104817f9e7b3875c9003a5bfa541bfa133be2a7ebdc6d13f34b34dbfae2a5527ded672c60001b6108e4565b61048a826108e7565b60405160200161049a9190611e96565b6040516020818303038152906040529050919050565b6104b8610a94565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614806104fe57506104fd856104f8610a94565b610722565b5b61053d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610534906120bb565b60405180910390fd5b61054a8585858585610a9c565b5050505050565b60608151835114610597576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058e9061211b565b60405180910390fd5b6000835167ffffffffffffffff8111156105da577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156106085781602001602082028036833780820191505090505b50905060005b84518110156106f7576106a1858281518110610653577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151858381518110610694577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015161024b565b8282815181106106da577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018181525050806106f09061246b565b905061060e565b508091505092915050565b600281565b610719610712610a94565b8383610e0a565b5050565b600381565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6107be610a94565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614806108045750610803856107fe610a94565b610722565b5b610843576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083a9061207b565b60405180910390fd5b6108508585858585610f77565b5050505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b50565b6060600082141561092f576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050610a8f565b600082905060005b6000821461096157808061094a9061246b565b915050600a8261095a919061231f565b9150610937565b60008167ffffffffffffffff8111156109a3577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156109d55781602001600182028036833780820191505090505b5090505b60008514610a88576001826109ee9190612350565b9150600a856109fd91906124b4565b6030610a0991906122c9565b60f81b818381518110610a45577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85610a81919061231f565b94506109d9565b8093505050505b919050565b600033905090565b8151835114610ae0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad79061213b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610b50576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b479061209b565b60405180910390fd5b6000610b5a610a94565b9050610b6a818787878787611213565b60005b8451811015610d67576000858281518110610bb1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015190506000858381518110610bf6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101519050600080600084815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610c97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8e906120db565b60405180910390fd5b81810360008085815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160008085815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d4c91906122c9565b9250508190555050505080610d609061246b565b9050610b6d565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610dde929190611fa7565b60405180910390a4610df481878787878761121b565b610e02818787878787611223565b505050505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610e79576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e70906120fb565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610f6a9190611fde565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610fe7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fde9061209b565b60405180910390fd5b6000610ff1610a94565b90506000610ffe8561140a565b9050600061100b8561140a565b905061101b838989858589611213565b600080600088815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050858110156110b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110a9906120db565b60405180910390fd5b85810360008089815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560008089815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461116791906122c9565b925050819055508773ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628a8a6040516111e4929190612176565b60405180910390a46111fa848a8a86868a61121b565b611208848a8a8a8a8a6114d0565b505050505050505050565b505050505050565b505050505050565b6112428473ffffffffffffffffffffffffffffffffffffffff16610857565b15611402578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b8152600401611288959493929190611ec3565b602060405180830381600087803b1580156112a257600080fd5b505af19250505080156112d357506040513d601f19601f820116820180604052508101906112d09190611b4b565b60015b611379576112df612572565b806308c379a0141561133c57506112f4612966565b806112ff575061133e565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113339190611ff9565b60405180910390fd5b505b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113709061201b565b60405180910390fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611400576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113f79061203b565b60405180910390fd5b505b505050505050565b60606000600167ffffffffffffffff81111561144f577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561147d5781602001602082028036833780820191505090505b50905082816000815181106114bb577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101818152505080915050919050565b6114ef8473ffffffffffffffffffffffffffffffffffffffff16610857565b156116af578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b8152600401611535959493929190611f2b565b602060405180830381600087803b15801561154f57600080fd5b505af192505050801561158057506040513d601f19601f8201168201806040525081019061157d9190611b4b565b60015b6116265761158c612572565b806308c379a014156115e957506115a1612966565b806115ac57506115eb565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115e09190611ff9565b60405180910390fd5b505b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161161d9061201b565b60405180910390fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146116ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116a49061203b565b60405180910390fd5b505b505050505050565b60006116ca6116c5846121c4565b61219f565b905080838252602082019050828560208602820111156116e957600080fd5b60005b8581101561171957816116ff88826117cd565b8452602084019350602083019250506001810190506116ec565b5050509392505050565b6000611736611731846121f0565b61219f565b9050808382526020820190508285602086028201111561175557600080fd5b60005b85811015611785578161176b888261189f565b845260208401935060208301925050600181019050611758565b5050509392505050565b60006117a261179d8461221c565b61219f565b9050828152602081018484840111156117ba57600080fd5b6117c58482856123f8565b509392505050565b6000813590506117dc816129fc565b92915050565b600082601f8301126117f357600080fd5b81356118038482602086016116b7565b91505092915050565b600082601f83011261181d57600080fd5b813561182d848260208601611723565b91505092915050565b60008135905061184581612a13565b92915050565b60008135905061185a81612a2a565b92915050565b60008151905061186f81612a2a565b92915050565b600082601f83011261188657600080fd5b813561189684826020860161178f565b91505092915050565b6000813590506118ae81612a41565b92915050565b600080604083850312156118c757600080fd5b60006118d5858286016117cd565b92505060206118e6858286016117cd565b9150509250929050565b600080600080600060a0868803121561190857600080fd5b6000611916888289016117cd565b9550506020611927888289016117cd565b945050604086013567ffffffffffffffff81111561194457600080fd5b6119508882890161180c565b935050606086013567ffffffffffffffff81111561196d57600080fd5b6119798882890161180c565b925050608086013567ffffffffffffffff81111561199657600080fd5b6119a288828901611875565b9150509295509295909350565b600080600080600060a086880312156119c757600080fd5b60006119d5888289016117cd565b95505060206119e6888289016117cd565b94505060406119f78882890161189f565b9350506060611a088882890161189f565b925050608086013567ffffffffffffffff811115611a2557600080fd5b611a3188828901611875565b9150509295509295909350565b60008060408385031215611a5157600080fd5b6000611a5f858286016117cd565b9250506020611a7085828601611836565b9150509250929050565b60008060408385031215611a8d57600080fd5b6000611a9b858286016117cd565b9250506020611aac8582860161189f565b9150509250929050565b60008060408385031215611ac957600080fd5b600083013567ffffffffffffffff811115611ae357600080fd5b611aef858286016117e2565b925050602083013567ffffffffffffffff811115611b0c57600080fd5b611b188582860161180c565b9150509250929050565b600060208284031215611b3457600080fd5b6000611b428482850161184b565b91505092915050565b600060208284031215611b5d57600080fd5b6000611b6b84828501611860565b91505092915050565b600060208284031215611b8657600080fd5b6000611b948482850161189f565b91505092915050565b6000611ba98383611e78565b60208301905092915050565b611bbe81612384565b82525050565b6000611bcf8261225d565b611bd9818561228b565b9350611be48361224d565b8060005b83811015611c15578151611bfc8882611b9d565b9750611c078361227e565b925050600181019050611be8565b5085935050505092915050565b611c2b81612396565b82525050565b6000611c3c82612268565b611c46818561229c565b9350611c56818560208601612407565b611c5f81612594565b840191505092915050565b6000611c7582612273565b611c7f81856122ad565b9350611c8f818560208601612407565b611c9881612594565b840191505092915050565b6000611cae82612273565b611cb881856122be565b9350611cc8818560208601612407565b80840191505092915050565b6000611ce16034836122ad565b9150611cec826125b2565b604082019050919050565b6000611d046028836122ad565b9150611d0f82612601565b604082019050919050565b6000611d27602b836122ad565b9150611d3282612650565b604082019050919050565b6000611d4a6029836122ad565b9150611d558261269f565b604082019050919050565b6000611d6d6051836122be565b9150611d78826126ee565b605182019050919050565b6000611d906025836122ad565b9150611d9b82612763565b604082019050919050565b6000611db36032836122ad565b9150611dbe826127b2565b604082019050919050565b6000611dd6602a836122ad565b9150611de182612801565b604082019050919050565b6000611df96005836122be565b9150611e0482612850565b600582019050919050565b6000611e1c6029836122ad565b9150611e2782612879565b604082019050919050565b6000611e3f6029836122ad565b9150611e4a826128c8565b604082019050919050565b6000611e626028836122ad565b9150611e6d82612917565b604082019050919050565b611e81816123ee565b82525050565b611e90816123ee565b82525050565b6000611ea182611d60565b9150611ead8284611ca3565b9150611eb882611dec565b915081905092915050565b600060a082019050611ed86000830188611bb5565b611ee56020830187611bb5565b8181036040830152611ef78186611bc4565b90508181036060830152611f0b8185611bc4565b90508181036080830152611f1f8184611c31565b90509695505050505050565b600060a082019050611f406000830188611bb5565b611f4d6020830187611bb5565b611f5a6040830186611e87565b611f676060830185611e87565b8181036080830152611f798184611c31565b90509695505050505050565b60006020820190508181036000830152611f9f8184611bc4565b905092915050565b60006040820190508181036000830152611fc18185611bc4565b90508181036020830152611fd58184611bc4565b90509392505050565b6000602082019050611ff36000830184611c22565b92915050565b600060208201905081810360008301526120138184611c6a565b905092915050565b6000602082019050818103600083015261203481611cd4565b9050919050565b6000602082019050818103600083015261205481611cf7565b9050919050565b6000602082019050818103600083015261207481611d1a565b9050919050565b6000602082019050818103600083015261209481611d3d565b9050919050565b600060208201905081810360008301526120b481611d83565b9050919050565b600060208201905081810360008301526120d481611da6565b9050919050565b600060208201905081810360008301526120f481611dc9565b9050919050565b6000602082019050818103600083015261211481611e0f565b9050919050565b6000602082019050818103600083015261213481611e32565b9050919050565b6000602082019050818103600083015261215481611e55565b9050919050565b60006020820190506121706000830184611e87565b92915050565b600060408201905061218b6000830185611e87565b6121986020830184611e87565b9392505050565b60006121a96121ba565b90506121b5828261243a565b919050565b6000604051905090565b600067ffffffffffffffff8211156121df576121de612543565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561220b5761220a612543565b5b602082029050602081019050919050565b600067ffffffffffffffff82111561223757612236612543565b5b61224082612594565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006122d4826123ee565b91506122df836123ee565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612314576123136124e5565b5b828201905092915050565b600061232a826123ee565b9150612335836123ee565b92508261234557612344612514565b5b828204905092915050565b600061235b826123ee565b9150612366836123ee565b925082821015612379576123786124e5565b5b828203905092915050565b600061238f826123ce565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561242557808201518184015260208101905061240a565b83811115612434576000848401525b50505050565b61244382612594565b810181811067ffffffffffffffff8211171561246257612461612543565b5b80604052505050565b6000612476826123ee565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156124a9576124a86124e5565b5b600182019050919050565b60006124bf826123ee565b91506124ca836123ee565b9250826124da576124d9612514565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600060033d11156125915760046000803e61258e6000516125a5565b90505b90565b6000601f19601f8301169050919050565b60008160e01c9050919050565b7f455243313135353a207472616e7366657220746f206e6f6e204552433131353560008201527f526563656976657220696d706c656d656e746572000000000000000000000000602082015250565b7f455243313135353a204552433131353552656365697665722072656a6563746560008201527f6420746f6b656e73000000000000000000000000000000000000000000000000602082015250565b7f455243313135353a2062616c616e636520717565727920666f7220746865207a60008201527f65726f2061646472657373000000000000000000000000000000000000000000602082015250565b7f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260008201527f20617070726f7665640000000000000000000000000000000000000000000000602082015250565b7f68747470733a2f2f697066732e696f2f697066732f6261667962656961727a7860008201527f666b626d6e357a6f707579616363676536646479346c346272366379346f746960208201527f646d6e376274677273656f7a7a7863612f000000000000000000000000000000604082015250565b7f455243313135353a207472616e7366657220746f20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f455243313135353a207472616e736665722063616c6c6572206973206e6f742060008201527f6f776e6572206e6f7220617070726f7665640000000000000000000000000000602082015250565b7f455243313135353a20696e73756666696369656e742062616c616e636520666f60008201527f72207472616e7366657200000000000000000000000000000000000000000000602082015250565b7f2e6a736f6e000000000000000000000000000000000000000000000000000000600082015250565b7f455243313135353a2073657474696e6720617070726f76616c2073746174757360008201527f20666f722073656c660000000000000000000000000000000000000000000000602082015250565b7f455243313135353a206163636f756e747320616e6420696473206c656e67746860008201527f206d69736d617463680000000000000000000000000000000000000000000000602082015250565b7f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060008201527f6d69736d61746368000000000000000000000000000000000000000000000000602082015250565b600060443d1015612976576129f9565b61297e6121ba565b60043d036004823e80513d602482011167ffffffffffffffff821117156129a65750506129f9565b808201805167ffffffffffffffff8111156129c457505050506129f9565b80602083010160043d0385018111156129e15750505050506129f9565b6129f08260200185018661243a565b82955050505050505b90565b612a0581612384565b8114612a1057600080fd5b50565b612a1c81612396565b8114612a2757600080fd5b50565b612a33816123a2565b8114612a3e57600080fd5b50565b612a4a816123ee565b8114612a5557600080fd5b5056fea2646970667358221220c972bcc47918979fb33e6b3dd85ec8d37b84013819b2bb74cfc9e2d3b658253d64736f6c6343000804003368747470733a2f2f697066732e696f2f697066732f6261667962656961727a78666b626d6e357a6f707579616363676536646479346c346272366379346f7469646d6e376274677273656f7a7a7863612f7b69647d2e6a736f6e";

type NFT1155ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFT1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFT1155__factory extends ContractFactory {
  constructor(...args: NFT1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NFT1155> {
    return super.deploy(overrides || {}) as Promise<NFT1155>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NFT1155 {
    return super.attach(address) as NFT1155;
  }
  override connect(signer: Signer): NFT1155__factory {
    return super.connect(signer) as NFT1155__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFT1155Interface {
    return new utils.Interface(_abi) as NFT1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFT1155 {
    return new Contract(address, _abi, signerOrProvider) as NFT1155;
  }
}
