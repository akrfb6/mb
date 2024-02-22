"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3152], {
    60113: function(f, e, t) {
        var n = Object.create ? function(f, e, t, n) {
            void 0 === n && (n = t);
            var a = Object.getOwnPropertyDescriptor(e, t);
            (!a || ("get"in a ? !e.__esModule : a.writable || a.configurable)) && (a = {
                enumerable: !0,
                get: function() {
                    return e[t]
                }
            }),
            Object.defineProperty(f, n, a)
        }
        : function(f, e, t, n) {
            void 0 === n && (n = t),
            f[n] = e[t]
        }
          , a = Object.create ? function(f, e) {
            Object.defineProperty(f, "default", {
                enumerable: !0,
                value: e
            })
        }
        : function(f, e) {
            f.default = e
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.token = void 0,
        e.token = function(f) {
            if (f && f.__esModule)
                return f;
            var e = {};
            if (null != f)
                for (var t in f)
                    "default" !== t && Object.prototype.hasOwnProperty.call(f, t) && n(e, f, t);
            return a(e, f),
            e
        }(t(46417))
    },
    4634: function(f, e, t) {
        var n, a = (n = function(f, e) {
            return (n = Object.setPrototypeOf || ({
                __proto__: []
            })instanceof Array && function(f, e) {
                f.__proto__ = e
            }
            || function(f, e) {
                for (var t in e)
                    Object.prototype.hasOwnProperty.call(e, t) && (f[t] = e[t])
            }
            )(f, e)
        }
        ,
        function(f, e) {
            if ("function" != typeof e && null !== e)
                throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
            function t() {
                this.constructor = f
            }
            n(f, e),
            f.prototype = null === e ? Object.create(e) : (t.prototype = e.prototype,
            new t)
        }
        );
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.ERC20__factory = void 0;
        var b = t(20698)
          , r = [{
            inputs: [{
                internalType: "string",
                name: "name_",
                type: "string"
            }, {
                internalType: "string",
                name: "symbol_",
                type: "string"
            }],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Approval",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Transfer",
            type: "event"
        }, {
            inputs: [{
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                internalType: "address",
                name: "spender",
                type: "address"
            }],
            name: "allowance",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "approve",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "account",
                type: "address"
            }],
            name: "balanceOf",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "decimals",
            outputs: [{
                internalType: "uint8",
                name: "",
                type: "uint8"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256"
            }],
            name: "decreaseAllowance",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256"
            }],
            name: "increaseAllowance",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "name",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "symbol",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalSupply",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "transfer",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "from",
                type: "address"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "transferFrom",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }]
          , d = "0x60806040523480156200001157600080fd5b50604051620017ec380380620017ec8339818101604052810190620000379190620001f6565b8160039081620000489190620004c6565b5080600490816200005a9190620004c6565b505050620005ad565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620000cc8262000081565b810181811067ffffffffffffffff82111715620000ee57620000ed62000092565b5b80604052505050565b60006200010362000063565b9050620001118282620000c1565b919050565b600067ffffffffffffffff82111562000134576200013362000092565b5b6200013f8262000081565b9050602081019050919050565b60005b838110156200016c5780820151818401526020810190506200014f565b60008484015250505050565b60006200018f620001898462000116565b620000f7565b905082815260208101848484011115620001ae57620001ad6200007c565b5b620001bb8482856200014c565b509392505050565b600082601f830112620001db57620001da62000077565b5b8151620001ed84826020860162000178565b91505092915050565b6000806040838503121562000210576200020f6200006d565b5b600083015167ffffffffffffffff81111562000231576200023062000072565b5b6200023f85828601620001c3565b925050602083015167ffffffffffffffff81111562000263576200026262000072565b5b6200027185828601620001c3565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002ce57607f821691505b602082108103620002e457620002e362000286565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200034e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200030f565b6200035a86836200030f565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003a7620003a16200039b8462000372565b6200037c565b62000372565b9050919050565b6000819050919050565b620003c38362000386565b620003db620003d282620003ae565b8484546200031c565b825550505050565b600090565b620003f2620003e3565b620003ff818484620003b8565b505050565b5b8181101562000427576200041b600082620003e8565b60018101905062000405565b5050565b601f82111562000476576200044081620002ea565b6200044b84620002ff565b810160208510156200045b578190505b620004736200046a85620002ff565b83018262000404565b50505b505050565b600082821c905092915050565b60006200049b600019846008026200047b565b1980831691505092915050565b6000620004b6838362000488565b9150826002028217905092915050565b620004d1826200027b565b67ffffffffffffffff811115620004ed57620004ec62000092565b5b620004f98254620002b5565b620005068282856200042b565b600060209050601f8311600181146200053e576000841562000529578287015190505b620005358582620004a8565b865550620005a5565b601f1984166200054e86620002ea565b60005b82811015620005785784890151825560018201915060208501945060208101905062000551565b8683101562000598578489015162000594601f89168262000488565b8355505b6001600288020188555050505b505050505050565b61122f80620005bd6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610b0c565b60405180910390f35b6100e660048036038101906100e19190610bc7565b610308565b6040516100f39190610c22565b60405180910390f35b61010461032b565b6040516101119190610c4c565b60405180910390f35b610134600480360381019061012f9190610c67565b610335565b6040516101419190610c22565b60405180910390f35b610152610364565b60405161015f9190610cd6565b60405180910390f35b610182600480360381019061017d9190610bc7565b61036d565b60405161018f9190610c22565b60405180910390f35b6101b260048036038101906101ad9190610cf1565b6103a4565b6040516101bf9190610c4c565b60405180910390f35b6101d06103ec565b6040516101dd9190610b0c565b60405180910390f35b61020060048036038101906101fb9190610bc7565b61047e565b60405161020d9190610c22565b60405180910390f35b610230600480360381019061022b9190610bc7565b6104f5565b60405161023d9190610c22565b60405180910390f35b610260600480360381019061025b9190610d1e565b610518565b60405161026d9190610c4c565b60405180910390f35b60606003805461028590610d8d565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610d8d565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b60008061031361059f565b90506103208185856105a7565b600191505092915050565b6000600254905090565b60008061034061059f565b905061034d858285610770565b6103588585856107fc565b60019150509392505050565b60006012905090565b60008061037861059f565b905061039981858561038a8589610518565b6103949190610ded565b6105a7565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546103fb90610d8d565b80601f016020809104026020016040519081016040528092919081815260200182805461042790610d8d565b80156104745780601f1061044957610100808354040283529160200191610474565b820191906000526020600020905b81548152906001019060200180831161045757829003601f168201915b5050505050905090565b60008061048961059f565b905060006104978286610518565b9050838110156104dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d390610e93565b60405180910390fd5b6104e982868684036105a7565b60019250505092915050565b60008061050061059f565b905061050d8185856107fc565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610616576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060d90610f25565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610685576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067c90610fb7565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107639190610c4c565b60405180910390a3505050565b600061077c8484610518565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146107f657818110156107e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107df90611023565b60405180910390fd5b6107f584848484036105a7565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361086b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610862906110b5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d190611147565b60405180910390fd5b6108e5838383610a72565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561096b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610962906111d9565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a599190610c4c565b60405180910390a3610a6c848484610a77565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ab6578082015181840152602081019050610a9b565b60008484015250505050565b6000601f19601f8301169050919050565b6000610ade82610a7c565b610ae88185610a87565b9350610af8818560208601610a98565b610b0181610ac2565b840191505092915050565b60006020820190508181036000830152610b268184610ad3565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b5e82610b33565b9050919050565b610b6e81610b53565b8114610b7957600080fd5b50565b600081359050610b8b81610b65565b92915050565b6000819050919050565b610ba481610b91565b8114610baf57600080fd5b50565b600081359050610bc181610b9b565b92915050565b60008060408385031215610bde57610bdd610b2e565b5b6000610bec85828601610b7c565b9250506020610bfd85828601610bb2565b9150509250929050565b60008115159050919050565b610c1c81610c07565b82525050565b6000602082019050610c376000830184610c13565b92915050565b610c4681610b91565b82525050565b6000602082019050610c616000830184610c3d565b92915050565b600080600060608486031215610c8057610c7f610b2e565b5b6000610c8e86828701610b7c565b9350506020610c9f86828701610b7c565b9250506040610cb086828701610bb2565b9150509250925092565b600060ff82169050919050565b610cd081610cba565b82525050565b6000602082019050610ceb6000830184610cc7565b92915050565b600060208284031215610d0757610d06610b2e565b5b6000610d1584828501610b7c565b91505092915050565b60008060408385031215610d3557610d34610b2e565b5b6000610d4385828601610b7c565b9250506020610d5485828601610b7c565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610da557607f821691505b602082108103610db857610db7610d5e565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610df882610b91565b9150610e0383610b91565b9250828201905080821115610e1b57610e1a610dbe565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000610e7d602583610a87565b9150610e8882610e21565b604082019050919050565b60006020820190508181036000830152610eac81610e70565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000610f0f602483610a87565b9150610f1a82610eb3565b604082019050919050565b60006020820190508181036000830152610f3e81610f02565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000610fa1602283610a87565b9150610fac82610f45565b604082019050919050565b60006020820190508181036000830152610fd081610f94565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061100d601d83610a87565b915061101882610fd7565b602082019050919050565b6000602082019050818103600083015261103c81611000565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061109f602583610a87565b91506110aa82611043565b604082019050919050565b600060208201905081810360008301526110ce81611092565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611131602383610a87565b915061113c826110d5565b604082019050919050565b6000602082019050818103600083015261116081611124565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006111c3602683610a87565b91506111ce82611167565b604082019050919050565b600060208201905081810360008301526111f2816111b6565b905091905056fea264697066735822122095dd597d5e41c6b9fc4d675b36c3bde4e0c1f61bd6b18f088d3e34f22bd2a27964736f6c63430008110033";
        e.ERC20__factory = function(f) {
            function e() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                var n = this;
                return e.length > 1 ? f.apply(this, e) || this : f.call(this, r, d, e[0]) || this
            }
            return a(e, f),
            e.prototype.deploy = function(e, t, n) {
                return f.prototype.deploy.call(this, e, t, n || {})
            }
            ,
            e.prototype.getDeployTransaction = function(e, t, n) {
                return f.prototype.getDeployTransaction.call(this, e, t, n || {})
            }
            ,
            e.prototype.attach = function(e) {
                return f.prototype.attach.call(this, e)
            }
            ,
            e.prototype.connect = function(e) {
                return f.prototype.connect.call(this, e)
            }
            ,
            e.createInterface = function() {
                return new b.utils.Interface(r)
            }
            ,
            e.connect = function(f, e) {
                return new b.Contract(f,r,e)
            }
            ,
            e.bytecode = d,
            e.abi = r,
            e
        }(b.ContractFactory)
    },
    99220: function(f, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.IERC20__factory = void 0;
        var n = t(20698)
          , a = [{
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Approval",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Transfer",
            type: "event"
        }, {
            inputs: [{
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                internalType: "address",
                name: "spender",
                type: "address"
            }],
            name: "allowance",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "approve",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "account",
                type: "address"
            }],
            name: "balanceOf",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalSupply",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "transfer",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "from",
                type: "address"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "transferFrom",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }];
        e.IERC20__factory = function() {
            function f() {}
            return f.createInterface = function() {
                return new n.utils.Interface(a)
            }
            ,
            f.connect = function(f, e) {
                return new n.Contract(f,a,e)
            }
            ,
            f.abi = a,
            f
        }()
    },
    62870: function(f, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.IERC20Metadata__factory = void 0;
        var n = t(20698)
          , a = [{
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Approval",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Transfer",
            type: "event"
        }, {
            inputs: [{
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                internalType: "address",
                name: "spender",
                type: "address"
            }],
            name: "allowance",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "approve",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "account",
                type: "address"
            }],
            name: "balanceOf",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "decimals",
            outputs: [{
                internalType: "uint8",
                name: "",
                type: "uint8"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "name",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "symbol",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalSupply",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "transfer",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "from",
                type: "address"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "transferFrom",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }];
        e.IERC20Metadata__factory = function() {
            function f() {}
            return f.createInterface = function() {
                return new n.utils.Interface(a)
            }
            ,
            f.connect = function(f, e) {
                return new n.Contract(f,a,e)
            }
            ,
            f.abi = a,
            f
        }()
    },
    97658: function(f, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.IERC20Permit__factory = void 0;
        var n = t(20698)
          , a = [{
            inputs: [],
            name: "DOMAIN_SEPARATOR",
            outputs: [{
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "owner",
                type: "address"
            }],
            name: "nonces",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }, {
                internalType: "uint8",
                name: "v",
                type: "uint8"
            }, {
                internalType: "bytes32",
                name: "r",
                type: "bytes32"
            }, {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
            }],
            name: "permit",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }];
        e.IERC20Permit__factory = function() {
            function f() {}
            return f.createInterface = function() {
                return new n.utils.Interface(a)
            }
            ,
            f.connect = function(f, e) {
                return new n.Contract(f,a,e)
            }
            ,
            f.abi = a,
            f
        }()
    },
    93620: function(f, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.IERC20Permit__factory = e.IERC20Metadata__factory = void 0;
        var n = t(62870);
        Object.defineProperty(e, "IERC20Metadata__factory", {
            enumerable: !0,
            get: function() {
                return n.IERC20Metadata__factory
            }
        });
        var a = t(97658);
        Object.defineProperty(e, "IERC20Permit__factory", {
            enumerable: !0,
            get: function() {
                return a.IERC20Permit__factory
            }
        })
    },
    23504: function(f, e, t) {
        var n = Object.create ? function(f, e, t, n) {
            void 0 === n && (n = t);
            var a = Object.getOwnPropertyDescriptor(e, t);
            (!a || ("get"in a ? !e.__esModule : a.writable || a.configurable)) && (a = {
                enumerable: !0,
                get: function() {
                    return e[t]
                }
            }),
            Object.defineProperty(f, n, a)
        }
        : function(f, e, t, n) {
            void 0 === n && (n = t),
            f[n] = e[t]
        }
          , a = Object.create ? function(f, e) {
            Object.defineProperty(f, "default", {
                enumerable: !0,
                value: e
            })
        }
        : function(f, e) {
            f.default = e
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.IERC20__factory = e.ERC20__factory = e.extensions = void 0,
        e.extensions = function(f) {
            if (f && f.__esModule)
                return f;
            var e = {};
            if (null != f)
                for (var t in f)
                    "default" !== t && Object.prototype.hasOwnProperty.call(f, t) && n(e, f, t);
            return a(e, f),
            e
        }(t(93620));
        var b = t(4634);
        Object.defineProperty(e, "ERC20__factory", {
            enumerable: !0,
            get: function() {
                return b.ERC20__factory
            }
        });
        var r = t(99220);
        Object.defineProperty(e, "IERC20__factory", {
            enumerable: !0,
            get: function() {
                return r.IERC20__factory
            }
        })
    },
    46417: function(f, e, t) {
        var n = Object.create ? function(f, e, t, n) {
            void 0 === n && (n = t);
            var a = Object.getOwnPropertyDescriptor(e, t);
            (!a || ("get"in a ? !e.__esModule : a.writable || a.configurable)) && (a = {
                enumerable: !0,
                get: function() {
                    return e[t]
                }
            }),
            Object.defineProperty(f, n, a)
        }
        : function(f, e, t, n) {
            void 0 === n && (n = t),
            f[n] = e[t]
        }
          , a = Object.create ? function(f, e) {
            Object.defineProperty(f, "default", {
                enumerable: !0,
                value: e
            })
        }
        : function(f, e) {
            f.default = e
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.erc20 = void 0,
        e.erc20 = function(f) {
            if (f && f.__esModule)
                return f;
            var e = {};
            if (null != f)
                for (var t in f)
                    "default" !== t && Object.prototype.hasOwnProperty.call(f, t) && n(e, f, t);
            return a(e, f),
            e
        }(t(23504))
    },
    13630: function(f, e, t) {
        var n = Object.create ? function(f, e, t, n) {
            void 0 === n && (n = t);
            var a = Object.getOwnPropertyDescriptor(e, t);
            (!a || ("get"in a ? !e.__esModule : a.writable || a.configurable)) && (a = {
                enumerable: !0,
                get: function() {
                    return e[t]
                }
            }),
            Object.defineProperty(f, n, a)
        }
        : function(f, e, t, n) {
            void 0 === n && (n = t),
            f[n] = e[t]
        }
          , a = Object.create ? function(f, e) {
            Object.defineProperty(f, "default", {
                enumerable: !0,
                value: e
            })
        }
        : function(f, e) {
            f.default = e
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.contracts = void 0,
        e.contracts = function(f) {
            if (f && f.__esModule)
                return f;
            var e = {};
            if (null != f)
                for (var t in f)
                    "default" !== t && Object.prototype.hasOwnProperty.call(f, t) && n(e, f, t);
            return a(e, f),
            e
        }(t(60113))
    },
    89050: function(f, e, t) {
        var n, a = (n = function(f, e) {
            return (n = Object.setPrototypeOf || ({
                __proto__: []
            })instanceof Array && function(f, e) {
                f.__proto__ = e
            }
            || function(f, e) {
                for (var t in e)
                    Object.prototype.hasOwnProperty.call(e, t) && (f[t] = e[t])
            }
            )(f, e)
        }
        ,
        function(f, e) {
            if ("function" != typeof e && null !== e)
                throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
            function t() {
                this.constructor = f
            }
            n(f, e),
            f.prototype = null === e ? Object.create(e) : (t.prototype = e.prototype,
            new t)
        }
        );
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.BuyMeme__factory = void 0;
        var b = t(20698)
          , r = [{
            inputs: [{
                internalType: "address",
                name: "_feeClaimer",
                type: "address"
            }, {
                internalType: "address",
                name: "_mmtrAddress",
                type: "address"
            }, {
                internalType: "address",
                name: "_adminAddress",
                type: "address"
            }],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "token",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "payAmount",
                type: "uint256"
            }],
            name: "Buy",
            type: "event"
        }, {
            inputs: [],
            name: "adminAddress",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address[]",
                name: "tokenTypes",
                type: "address[]"
            }, {
                internalType: "uint256",
                name: "ethAmount",
                type: "uint256"
            }],
            name: "adminWithdrawERC20",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "adminWithdrawETH",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "buyerClaimToken",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "feeClaimer",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "token",
                type: "address"
            }],
            name: "getContractERC20Balance",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "getContractETHBalance",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "user",
                type: "address"
            }],
            name: "getPurchasedMeme",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "memeAddress",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                components: [{
                    internalType: "address",
                    name: "user",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                internalType: "struct BuyMeme.ClaimRecord[]",
                name: "records",
                type: "tuple[]"
            }],
            name: "recoverClaimRecords",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "erc20",
                type: "address"
            }, {
                internalType: "uint256",
                name: "payAmount",
                type: "uint256"
            }],
            name: "userBuyTokenWithERC20",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "userBuyTokenWithETH",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            stateMutability: "payable",
            type: "receive"
        }]
          , d = "0x60e06040523480156200001157600080fd5b506040516200228638038062002286833981810160405281019062000037919062000146565b8273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508173ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1681525050505050620001a2565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200010e82620000e1565b9050919050565b620001208162000101565b81146200012c57600080fd5b50565b600081519050620001408162000115565b92915050565b600080600060608486031215620001625762000161620000dc565b5b600062000172868287016200012f565b935050602062000185868287016200012f565b925050604062000198868287016200012f565b9150509250925092565b60805160a05160c051612091620001f5600039600081816103600152610d4e015260008181610ad201528181610b8e0152610d27015260008181610728015281816109200152610cb301526120916000f3fe6080604052600436106100aa5760003560e01c806381cbd3ea1161006457806381cbd3ea146101c95780638c89a0ad146101f45780639034cf921461021f578063979109f81461025c578063b706477f14610287578063fc6f9468146102b0576100eb565b806295b910146100f057806307c4b7bb1461012d57806364cdbe661461015657806375cab59a1461017f57806378f8561b146101a857806380746a51146101bf576100eb565b366100eb577fe3d4187f6ca4248660cc0ac8b8056515bac4a8132be2eca31d6d0cc170722a7e6000346040516100e1929190611237565b60405180910390a1005b600080fd5b3480156100fc57600080fd5b50610117600480360381019061011291906112a0565b6102db565b60405161012491906112cd565b60405180910390f35b34801561013957600080fd5b50610154600480360381019061014f91906114c2565b61035e565b005b34801561016257600080fd5b5061017d6004803603810190610178919061150b565b61048e565b005b34801561018b57600080fd5b506101a660048036038101906101a1919061160e565b610724565b005b3480156101b457600080fd5b506101bd610a37565b005b6101c7610c75565b005b3480156101d557600080fd5b506101de610cb1565b6040516101eb919061166a565b60405180910390f35b34801561020057600080fd5b50610209610cd5565b60405161021691906112cd565b60405180910390f35b34801561022b57600080fd5b50610246600480360381019061024191906112a0565b610cdd565b60405161025391906112cd565b60405180910390f35b34801561026857600080fd5b50610271610d25565b60405161027e919061166a565b60405180910390f35b34801561029357600080fd5b506102ae60048036038101906102a99190611685565b610d49565b005b3480156102bc57600080fd5b506102c5610d4c565b6040516102d2919061166a565b60405180910390f35b60008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610316919061166a565b602060405180830381865afa158015610333573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061035791906116c7565b9050919050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e390611777565b60405180910390fd5b60005b815181101561048a5781818151811061040b5761040a611797565b5b60200260200101516020015160008084848151811061042d5761042c611797565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508080610482906117f5565b9150506103ef565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036104fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f490611889565b60405180910390fd5b60008111610540576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610537906118f5565b60405180910390fd5b808273ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b815260040161057c929190611915565b602060405180830381865afa158015610599573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105bd91906116c7565b10156105fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f59061198a565b60405180910390fd5b808273ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b8152600401610638919061166a565b602060405180830381865afa158015610655573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067991906116c7565b10156106ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b1906119f6565b60405180910390fd5b6106e73330838573ffffffffffffffffffffffffffffffffffffffff16610d70909392919063ffffffff16565b7fe3d4187f6ca4248660cc0ac8b8056515bac4a8132be2eca31d6d0cc170722a7e8282604051610718929190611237565b60405180910390a15050565b60007f0000000000000000000000000000000000000000000000000000000000000000905060005b835181101561091b57600084828151811061076a57610769611797565b5b6020026020010151905060008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016107af919061166a565b602060405180830381865afa1580156107cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f091906116c7565b9050808273ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161082c919061166a565b602060405180830381865afa158015610849573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086d91906116c7565b10156108ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a590611a62565b60405180910390fd5b6108d930828473ffffffffffffffffffffffffffffffffffffffff16610df99092919063ffffffff16565b6109063085838573ffffffffffffffffffffffffffffffffffffffff16610d70909392919063ffffffff16565b50508080610913906117f5565b91505061074c565b5060007f0000000000000000000000000000000000000000000000000000000000000000905082471015610984576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097b90611ace565b60405180910390fd5b60008173ffffffffffffffffffffffffffffffffffffffff16846040516109aa90611b1f565b60006040518083038185875af1925050503d80600081146109e7576040519150601f19603f3d011682016040523d82523d6000602084013e6109ec565b606091505b5050905080610a30576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2790611b80565b60405180910390fd5b5050505050565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411610ab8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aaf90611bec565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1603610b47576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3e90611c58565b60405180910390fd5b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060007f00000000000000000000000000000000000000000000000000000000000000009050610bed30670de0b6b3a764000084610bc79190611c78565b8373ffffffffffffffffffffffffffffffffffffffff16610df99092919063ffffffff16565b610c2d3033670de0b6b3a764000085610c069190611c78565b8473ffffffffffffffffffffffffffffffffffffffff16610d70909392919063ffffffff16565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b7fe3d4187f6ca4248660cc0ac8b8056515bac4a8132be2eca31d6d0cc170722a7e600034604051610ca7929190611237565b60405180910390a1565b7f000000000000000000000000000000000000000000000000000000000000000081565b600047905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b610df3846323b872dd60e01b858585604051602401610d9193929190611cba565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610f48565b50505050565b6000811480610e83575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401610e40929190611915565b602060405180830381865afa158015610e5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e8191906116c7565b145b610ec2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb990611d63565b60405180910390fd5b610f438363095ea7b360e01b8484604051602401610ee1929190611237565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610f48565b505050565b6000610faa826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166110109092919063ffffffff16565b9050600081511480610fcc575080806020019051810190610fcb9190611dbb565b5b61100b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100290611e5a565b60405180910390fd5b505050565b606061101f8484600085611028565b90509392505050565b60608247101561106d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161106490611eec565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516110969190611f72565b60006040518083038185875af1925050503d80600081146110d3576040519150601f19603f3d011682016040523d82523d6000602084013e6110d8565b606091505b50915091506110e9878383876110f5565b92505050949350505050565b6060831561115757600083510361114f5761110f8561116a565b61114e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161114590611fd5565b60405180910390fd5b5b829050611162565b611161838361118d565b5b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000825111156111a05781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111d49190612039565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611208826111dd565b9050919050565b611218816111fd565b82525050565b6000819050919050565b6112318161121e565b82525050565b600060408201905061124c600083018561120f565b6112596020830184611228565b9392505050565b6000604051905090565b600080fd5b600080fd5b61127d816111fd565b811461128857600080fd5b50565b60008135905061129a81611274565b92915050565b6000602082840312156112b6576112b561126a565b5b60006112c48482850161128b565b91505092915050565b60006020820190506112e26000830184611228565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611336826112ed565b810181811067ffffffffffffffff82111715611355576113546112fe565b5b80604052505050565b6000611368611260565b9050611374828261132d565b919050565b600067ffffffffffffffff821115611394576113936112fe565b5b602082029050602081019050919050565b600080fd5b600080fd5b6113b88161121e565b81146113c357600080fd5b50565b6000813590506113d5816113af565b92915050565b6000604082840312156113f1576113f06113aa565b5b6113fb604061135e565b9050600061140b8482850161128b565b600083015250602061141f848285016113c6565b60208301525092915050565b600061143e61143984611379565b61135e565b90508083825260208201905060408402830185811115611461576114606113a5565b5b835b8181101561148a578061147688826113db565b845260208401935050604081019050611463565b5050509392505050565b600082601f8301126114a9576114a86112e8565b5b81356114b984826020860161142b565b91505092915050565b6000602082840312156114d8576114d761126a565b5b600082013567ffffffffffffffff8111156114f6576114f561126f565b5b61150284828501611494565b91505092915050565b600080604083850312156115225761152161126a565b5b60006115308582860161128b565b9250506020611541858286016113c6565b9150509250929050565b600067ffffffffffffffff821115611566576115656112fe565b5b602082029050602081019050919050565b600061158a6115858461154b565b61135e565b905080838252602082019050602084028301858111156115ad576115ac6113a5565b5b835b818110156115d657806115c2888261128b565b8452602084019350506020810190506115af565b5050509392505050565b600082601f8301126115f5576115f46112e8565b5b8135611605848260208601611577565b91505092915050565b600080604083850312156116255761162461126a565b5b600083013567ffffffffffffffff8111156116435761164261126f565b5b61164f858286016115e0565b9250506020611660858286016113c6565b9150509250929050565b600060208201905061167f600083018461120f565b92915050565b60006020828403121561169b5761169a61126a565b5b60006116a9848285016113c6565b91505092915050565b6000815190506116c1816113af565b92915050565b6000602082840312156116dd576116dc61126a565b5b60006116eb848285016116b2565b91505092915050565b600082825260208201905092915050565b7f4f6e6c792061646d696e2063616e207265636f76657220636c61696d2072656360008201527f6f72647300000000000000000000000000000000000000000000000000000000602082015250565b60006117616024836116f4565b915061176c82611705565b604082019050919050565b6000602082019050818103600083015261179081611754565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006118008261121e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611832576118316117c6565b5b600182019050919050565b7f496e76616c696420746f6b656e20616464726573730000000000000000000000600082015250565b60006118736015836116f4565b915061187e8261183d565b602082019050919050565b600060208201905081810360008301526118a281611866565b9050919050565b7f496e76616c696420746f6b656e20616d6f756e74000000000000000000000000600082015250565b60006118df6014836116f4565b91506118ea826118a9565b602082019050919050565b6000602082019050818103600083015261190e816118d2565b9050919050565b600060408201905061192a600083018561120f565b611937602083018461120f565b9392505050565b7f496e73756666696369656e7420616c6c6f77616e636500000000000000000000600082015250565b60006119746016836116f4565b915061197f8261193e565b602082019050919050565b600060208201905081810360008301526119a381611967565b9050919050565b7f496e73756666696369656e742062616c616e6365000000000000000000000000600082015250565b60006119e06014836116f4565b91506119eb826119aa565b602082019050919050565b60006020820190508181036000830152611a0f816119d3565b9050919050565b7f496e73756666696369656e742045524332302062616c616e6365000000000000600082015250565b6000611a4c601a836116f4565b9150611a5782611a16565b602082019050919050565b60006020820190508181036000830152611a7b81611a3f565b9050919050565b7f496e73756666696369656e74204554482062616c616e63650000000000000000600082015250565b6000611ab86018836116f4565b9150611ac382611a82565b602082019050919050565b60006020820190508181036000830152611ae781611aab565b9050919050565b600081905092915050565b50565b6000611b09600083611aee565b9150611b1482611af9565b600082019050919050565b6000611b2a82611afc565b9150819050919050565b7f455448207472616e73666572206661696c656400000000000000000000000000600082015250565b6000611b6a6013836116f4565b9150611b7582611b34565b602082019050919050565b60006020820190508181036000830152611b9981611b5d565b9050919050565b7f4e6f20746f6b656e20746f20636c61696d000000000000000000000000000000600082015250565b6000611bd66011836116f4565b9150611be182611ba0565b602082019050919050565b60006020820190508181036000830152611c0581611bc9565b9050919050565b7f4d656d652061646472657373206e6f7420736574000000000000000000000000600082015250565b6000611c426014836116f4565b9150611c4d82611c0c565b602082019050919050565b60006020820190508181036000830152611c7181611c35565b9050919050565b6000611c838261121e565b9150611c8e8361121e565b9250828202611c9c8161121e565b91508282048414831517611cb357611cb26117c6565b5b5092915050565b6000606082019050611ccf600083018661120f565b611cdc602083018561120f565b611ce96040830184611228565b949350505050565b7f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60008201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000602082015250565b6000611d4d6036836116f4565b9150611d5882611cf1565b604082019050919050565b60006020820190508181036000830152611d7c81611d40565b9050919050565b60008115159050919050565b611d9881611d83565b8114611da357600080fd5b50565b600081519050611db581611d8f565b92915050565b600060208284031215611dd157611dd061126a565b5b6000611ddf84828501611da6565b91505092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000611e44602a836116f4565b9150611e4f82611de8565b604082019050919050565b60006020820190508181036000830152611e7381611e37565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b6000611ed66026836116f4565b9150611ee182611e7a565b604082019050919050565b60006020820190508181036000830152611f0581611ec9565b9050919050565b600081519050919050565b60005b83811015611f35578082015181840152602081019050611f1a565b60008484015250505050565b6000611f4c82611f0c565b611f568185611aee565b9350611f66818560208601611f17565b80840191505092915050565b6000611f7e8284611f41565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000611fbf601d836116f4565b9150611fca82611f89565b602082019050919050565b60006020820190508181036000830152611fee81611fb2565b9050919050565b600081519050919050565b600061200b82611ff5565b61201581856116f4565b9350612025818560208601611f17565b61202e816112ed565b840191505092915050565b600060208201905081810360008301526120538184612000565b90509291505056fea2646970667358221220e296e0a6a78a8da06ac604699f631754e929222ed04e97e663aee7db0fb0d8a164736f6c63430008110033";
        e.BuyMeme__factory = function(f) {
            function e() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                var n = this;
                return e.length > 1 ? f.apply(this, e) || this : f.call(this, r, d, e[0]) || this
            }
            return a(e, f),
            e.prototype.deploy = function(e, t, n, a) {
                return f.prototype.deploy.call(this, e, t, n, a || {})
            }
            ,
            e.prototype.getDeployTransaction = function(e, t, n, a) {
                return f.prototype.getDeployTransaction.call(this, e, t, n, a || {})
            }
            ,
            e.prototype.attach = function(e) {
                return f.prototype.attach.call(this, e)
            }
            ,
            e.prototype.connect = function(e) {
                return f.prototype.connect.call(this, e)
            }
            ,
            e.createInterface = function() {
                return new b.utils.Interface(r)
            }
            ,
            e.connect = function(f, e) {
                return new b.Contract(f,r,e)
            }
            ,
            e.bytecode = d,
            e.abi = r,
            e
        }(b.ContractFactory)
    },
    57959: function(f, e, t) {
        var n, a = (n = function(f, e) {
            return (n = Object.setPrototypeOf || ({
                __proto__: []
            })instanceof Array && function(f, e) {
                f.__proto__ = e
            }
            || function(f, e) {
                for (var t in e)
                    Object.prototype.hasOwnProperty.call(e, t) && (f[t] = e[t])
            }
            )(f, e)
        }
        ,
        function(f, e) {
            if ("function" != typeof e && null !== e)
                throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
            function t() {
                this.constructor = f
            }
            n(f, e),
            f.prototype = null === e ? Object.create(e) : (t.prototype = e.prototype,
            new t)
        }
        );
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.FiatPurchase__factory = void 0;
        var b = t(20698)
          , r = [{
            inputs: [{
                internalType: "address",
                name: "_feeReceiver",
                type: "address"
            }, {
                internalType: "address",
                name: "_adminAddress",
                type: "address"
            }],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "address",
                name: "wallet",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "memeAmount",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "ethAmount",
                type: "uint256"
            }],
            name: "Buy",
            type: "event"
        }, {
            inputs: [{
                internalType: "address",
                name: "wallet",
                type: "address"
            }],
            name: "getUserPurchasedAmount",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "wallet",
                type: "address"
            }, {
                internalType: "uint256",
                name: "memeAmount",
                type: "uint256"
            }],
            name: "purchase",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                components: [{
                    internalType: "address",
                    name: "user",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                internalType: "struct FiatPurchase.ClaimRecord[]",
                name: "records",
                type: "tuple[]"
            }],
            name: "recoverClaimRecords",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            stateMutability: "payable",
            type: "receive"
        }]
          , d = "0x60c060405234801561001057600080fd5b50604051610a07380380610a0783398181016040528101906100329190610104565b8173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250505050610144565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100d1826100a6565b9050919050565b6100e1816100c6565b81146100ec57600080fd5b50565b6000815190506100fe816100d8565b92915050565b6000806040838503121561011b5761011a6100a1565b5b6000610129858286016100ef565b925050602061013a858286016100ef565b9150509250929050565b60805160a05161089f610168600039600060c801526000610307015261089f6000f3fe6080604052600436106100385760003560e01c806307c4b7bb1461004457806310a142941461006d5780638de93222146100aa5761003f565b3661003f57005b600080fd5b34801561005057600080fd5b5061006b600480360381019061006691906105c6565b6100c6565b005b34801561007957600080fd5b50610094600480360381019061008f919061060f565b6101f6565b6040516100a1919061064b565b60405180910390f35b6100c460048036038101906100bf9190610666565b61023e565b005b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610154576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161014b90610729565b60405180910390fd5b60005b81518110156101f25781818151811061017357610172610749565b5b60200260200101516020015160008084848151811061019557610194610749565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080806101ea906107a7565b915050610157565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461028891906107ef565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507f1cbc5ab135991bd2b6a4b034a04aa2aa086dac1371cb9b16b8b5e2ed6b036bed8282346040516102fd93929190610832565b60405180910390a17f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505015801561036b573d6000803e3d6000fd5b505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6103d282610389565b810181811067ffffffffffffffff821117156103f1576103f061039a565b5b80604052505050565b6000610404610370565b905061041082826103c9565b919050565b600067ffffffffffffffff8211156104305761042f61039a565b5b602082029050602081019050919050565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104768261044b565b9050919050565b6104868161046b565b811461049157600080fd5b50565b6000813590506104a38161047d565b92915050565b6000819050919050565b6104bc816104a9565b81146104c757600080fd5b50565b6000813590506104d9816104b3565b92915050565b6000604082840312156104f5576104f4610446565b5b6104ff60406103fa565b9050600061050f84828501610494565b6000830152506020610523848285016104ca565b60208301525092915050565b600061054261053d84610415565b6103fa565b9050808382526020820190506040840283018581111561056557610564610441565b5b835b8181101561058e578061057a88826104df565b845260208401935050604081019050610567565b5050509392505050565b600082601f8301126105ad576105ac610384565b5b81356105bd84826020860161052f565b91505092915050565b6000602082840312156105dc576105db61037a565b5b600082013567ffffffffffffffff8111156105fa576105f961037f565b5b61060684828501610598565b91505092915050565b6000602082840312156106255761062461037a565b5b600061063384828501610494565b91505092915050565b610645816104a9565b82525050565b6000602082019050610660600083018461063c565b92915050565b6000806040838503121561067d5761067c61037a565b5b600061068b85828601610494565b925050602061069c858286016104ca565b9150509250929050565b600082825260208201905092915050565b7f4f6e6c792061646d696e2063616e207265636f76657220636c61696d2072656360008201527f6f72647300000000000000000000000000000000000000000000000000000000602082015250565b60006107136024836106a6565b915061071e826106b7565b604082019050919050565b6000602082019050818103600083015261074281610706565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006107b2826104a9565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036107e4576107e3610778565b5b600182019050919050565b60006107fa826104a9565b9150610805836104a9565b925082820190508082111561081d5761081c610778565b5b92915050565b61082c8161046b565b82525050565b60006060820190506108476000830186610823565b610854602083018561063c565b610861604083018461063c565b94935050505056fea264697066735822122070686b8e120661dea529295b2c046acee766582be89049772a2ce01c77c50ebb64736f6c63430008110033";
        e.FiatPurchase__factory = function(f) {
            function e() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                var n = this;
                return e.length > 1 ? f.apply(this, e) || this : f.call(this, r, d, e[0]) || this
            }
            return a(e, f),
            e.prototype.deploy = function(e, t, n) {
                return f.prototype.deploy.call(this, e, t, n || {})
            }
            ,
            e.prototype.getDeployTransaction = function(e, t, n) {
                return f.prototype.getDeployTransaction.call(this, e, t, n || {})
            }
            ,
            e.prototype.attach = function(e) {
                return f.prototype.attach.call(this, e)
            }
            ,
            e.prototype.connect = function(e) {
                return f.prototype.connect.call(this, e)
            }
            ,
            e.createInterface = function() {
                return new b.utils.Interface(r)
            }
            ,
            e.connect = function(f, e) {
                return new b.Contract(f,r,e)
            }
            ,
            e.bytecode = d,
            e.abi = r,
            e
        }(b.ContractFactory)
    },
    55584: function(f, e, t) {
        var n, a = (n = function(f, e) {
            return (n = Object.setPrototypeOf || ({
                __proto__: []
            })instanceof Array && function(f, e) {
                f.__proto__ = e
            }
            || function(f, e) {
                for (var t in e)
                    Object.prototype.hasOwnProperty.call(e, t) && (f[t] = e[t])
            }
            )(f, e)
        }
        ,
        function(f, e) {
            if ("function" != typeof e && null !== e)
                throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
            function t() {
                this.constructor = f
            }
            n(f, e),
            f.prototype = null === e ? Object.create(e) : (t.prototype = e.prototype,
            new t)
        }
        );
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.MMTRToken__factory = void 0;
        var b = t(20698)
          , r = [{
            inputs: [],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Approval",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Transfer",
            type: "event"
        }, {
            inputs: [{
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                internalType: "address",
                name: "spender",
                type: "address"
            }],
            name: "allowance",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "approve",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "account",
                type: "address"
            }],
            name: "balanceOf",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "decimals",
            outputs: [{
                internalType: "uint8",
                name: "",
                type: "uint8"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256"
            }],
            name: "decreaseAllowance",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256"
            }],
            name: "increaseAllowance",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "name",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "symbol",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalSupply",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "transfer",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "from",
                type: "address"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "transferFrom",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }]
          , d = "0x60806040523480156200001157600080fd5b506040518060400160405280600a81526020017f4d656d65696e61746f72000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f4d4d54520000000000000000000000000000000000000000000000000000000081525081600390816200008f9190620004fe565b508060049081620000a19190620004fe565b50505060007365ac517c376d7586cb8e5a62d5a498953bdced5d9050620000fd81620000d26200010460201b60201c565b600a620000e0919062000775565b633b9aca00620000f19190620007c6565b6200010d60201b60201c565b50620008fd565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036200017f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001769062000872565b60405180910390fd5b62000193600083836200027a60201b60201c565b8060026000828254620001a7919062000894565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200025a9190620008e0565b60405180910390a362000276600083836200027f60201b60201c565b5050565b505050565b505050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200030657607f821691505b6020821081036200031c576200031b620002be565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003867fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000347565b62000392868362000347565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003df620003d9620003d384620003aa565b620003b4565b620003aa565b9050919050565b6000819050919050565b620003fb83620003be565b620004136200040a82620003e6565b84845462000354565b825550505050565b600090565b6200042a6200041b565b62000437818484620003f0565b505050565b5b818110156200045f576200045360008262000420565b6001810190506200043d565b5050565b601f821115620004ae57620004788162000322565b620004838462000337565b8101602085101562000493578190505b620004ab620004a28562000337565b8301826200043c565b50505b505050565b600082821c905092915050565b6000620004d360001984600802620004b3565b1980831691505092915050565b6000620004ee8383620004c0565b9150826002028217905092915050565b620005098262000284565b67ffffffffffffffff8111156200052557620005246200028f565b5b620005318254620002ed565b6200053e82828562000463565b600060209050601f83116001811462000576576000841562000561578287015190505b6200056d8582620004e0565b865550620005dd565b601f198416620005868662000322565b60005b82811015620005b05784890151825560018201915060208501945060208101905062000589565b86831015620005d05784890151620005cc601f891682620004c0565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b600185111562000673578086048111156200064b576200064a620005e5565b5b60018516156200065b5780820291505b80810290506200066b8562000614565b94506200062b565b94509492505050565b6000826200068e576001905062000761565b816200069e576000905062000761565b8160018114620006b75760028114620006c257620006f8565b600191505062000761565b60ff841115620006d757620006d6620005e5565b5b8360020a915084821115620006f157620006f0620005e5565b5b5062000761565b5060208310610133831016604e8410600b8410161715620007325782820a9050838111156200072c576200072b620005e5565b5b62000761565b62000741848484600162000621565b925090508184048111156200075b576200075a620005e5565b5b81810290505b9392505050565b600060ff82169050919050565b60006200078282620003aa565b91506200078f8362000768565b9250620007be7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846200067c565b905092915050565b6000620007d382620003aa565b9150620007e083620003aa565b9250828202620007f081620003aa565b915082820484148315176200080a5762000809620005e5565b5b5092915050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006200085a601f8362000811565b9150620008678262000822565b602082019050919050565b600060208201905081810360008301526200088d816200084b565b9050919050565b6000620008a182620003aa565b9150620008ae83620003aa565b9250828201905080821115620008c957620008c8620005e5565b5b92915050565b620008da81620003aa565b82525050565b6000602082019050620008f76000830184620008cf565b92915050565b61122f806200090d6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610b0c565b60405180910390f35b6100e660048036038101906100e19190610bc7565b610308565b6040516100f39190610c22565b60405180910390f35b61010461032b565b6040516101119190610c4c565b60405180910390f35b610134600480360381019061012f9190610c67565b610335565b6040516101419190610c22565b60405180910390f35b610152610364565b60405161015f9190610cd6565b60405180910390f35b610182600480360381019061017d9190610bc7565b61036d565b60405161018f9190610c22565b60405180910390f35b6101b260048036038101906101ad9190610cf1565b6103a4565b6040516101bf9190610c4c565b60405180910390f35b6101d06103ec565b6040516101dd9190610b0c565b60405180910390f35b61020060048036038101906101fb9190610bc7565b61047e565b60405161020d9190610c22565b60405180910390f35b610230600480360381019061022b9190610bc7565b6104f5565b60405161023d9190610c22565b60405180910390f35b610260600480360381019061025b9190610d1e565b610518565b60405161026d9190610c4c565b60405180910390f35b60606003805461028590610d8d565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610d8d565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b60008061031361059f565b90506103208185856105a7565b600191505092915050565b6000600254905090565b60008061034061059f565b905061034d858285610770565b6103588585856107fc565b60019150509392505050565b60006012905090565b60008061037861059f565b905061039981858561038a8589610518565b6103949190610ded565b6105a7565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546103fb90610d8d565b80601f016020809104026020016040519081016040528092919081815260200182805461042790610d8d565b80156104745780601f1061044957610100808354040283529160200191610474565b820191906000526020600020905b81548152906001019060200180831161045757829003601f168201915b5050505050905090565b60008061048961059f565b905060006104978286610518565b9050838110156104dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d390610e93565b60405180910390fd5b6104e982868684036105a7565b60019250505092915050565b60008061050061059f565b905061050d8185856107fc565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610616576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060d90610f25565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610685576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067c90610fb7565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107639190610c4c565b60405180910390a3505050565b600061077c8484610518565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146107f657818110156107e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107df90611023565b60405180910390fd5b6107f584848484036105a7565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361086b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610862906110b5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d190611147565b60405180910390fd5b6108e5838383610a72565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561096b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610962906111d9565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a599190610c4c565b60405180910390a3610a6c848484610a77565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ab6578082015181840152602081019050610a9b565b60008484015250505050565b6000601f19601f8301169050919050565b6000610ade82610a7c565b610ae88185610a87565b9350610af8818560208601610a98565b610b0181610ac2565b840191505092915050565b60006020820190508181036000830152610b268184610ad3565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b5e82610b33565b9050919050565b610b6e81610b53565b8114610b7957600080fd5b50565b600081359050610b8b81610b65565b92915050565b6000819050919050565b610ba481610b91565b8114610baf57600080fd5b50565b600081359050610bc181610b9b565b92915050565b60008060408385031215610bde57610bdd610b2e565b5b6000610bec85828601610b7c565b9250506020610bfd85828601610bb2565b9150509250929050565b60008115159050919050565b610c1c81610c07565b82525050565b6000602082019050610c376000830184610c13565b92915050565b610c4681610b91565b82525050565b6000602082019050610c616000830184610c3d565b92915050565b600080600060608486031215610c8057610c7f610b2e565b5b6000610c8e86828701610b7c565b9350506020610c9f86828701610b7c565b9250506040610cb086828701610bb2565b9150509250925092565b600060ff82169050919050565b610cd081610cba565b82525050565b6000602082019050610ceb6000830184610cc7565b92915050565b600060208284031215610d0757610d06610b2e565b5b6000610d1584828501610b7c565b91505092915050565b60008060408385031215610d3557610d34610b2e565b5b6000610d4385828601610b7c565b9250506020610d5485828601610b7c565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610da557607f821691505b602082108103610db857610db7610d5e565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610df882610b91565b9150610e0383610b91565b9250828201905080821115610e1b57610e1a610dbe565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000610e7d602583610a87565b9150610e8882610e21565b604082019050919050565b60006020820190508181036000830152610eac81610e70565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000610f0f602483610a87565b9150610f1a82610eb3565b604082019050919050565b60006020820190508181036000830152610f3e81610f02565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000610fa1602283610a87565b9150610fac82610f45565b604082019050919050565b60006020820190508181036000830152610fd081610f94565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061100d601d83610a87565b915061101882610fd7565b602082019050919050565b6000602082019050818103600083015261103c81611000565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061109f602583610a87565b91506110aa82611043565b604082019050919050565b600060208201905081810360008301526110ce81611092565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611131602383610a87565b915061113c826110d5565b604082019050919050565b6000602082019050818103600083015261116081611124565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006111c3602683610a87565b91506111ce82611167565b604082019050919050565b600060208201905081810360008301526111f2816111b6565b905091905056fea264697066735822122076204def5fbbfbe721fbb7608e294d88b20c02e7a3df111986fb428e276cb53a64736f6c63430008110033";
        e.MMTRToken__factory = function(f) {
            function e() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                var n = this;
                return e.length > 1 ? f.apply(this, e) || this : f.call(this, r, d, e[0]) || this
            }
            return a(e, f),
            e.prototype.deploy = function(e) {
                return f.prototype.deploy.call(this, e || {})
            }
            ,
            e.prototype.getDeployTransaction = function(e) {
                return f.prototype.getDeployTransaction.call(this, e || {})
            }
            ,
            e.prototype.attach = function(e) {
                return f.prototype.attach.call(this, e)
            }
            ,
            e.prototype.connect = function(e) {
                return f.prototype.connect.call(this, e)
            }
            ,
            e.createInterface = function() {
                return new b.utils.Interface(r)
            }
            ,
            e.connect = function(f, e) {
                return new b.Contract(f,r,e)
            }
            ,
            e.bytecode = d,
            e.abi = r,
            e
        }(b.ContractFactory)
    },
    33013: function(f, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.MMTRToken__factory = void 0;
        var n = t(55584);
        Object.defineProperty(e, "MMTRToken__factory", {
            enumerable: !0,
            get: function() {
                return n.MMTRToken__factory
            }
        })
    },
    69885: function(f, e, t) {
        var n, a = (n = function(f, e) {
            return (n = Object.setPrototypeOf || ({
                __proto__: []
            })instanceof Array && function(f, e) {
                f.__proto__ = e
            }
            || function(f, e) {
                for (var t in e)
                    Object.prototype.hasOwnProperty.call(e, t) && (f[t] = e[t])
            }
            )(f, e)
        }
        ,
        function(f, e) {
            if ("function" != typeof e && null !== e)
                throw TypeError("Class extends value " + String(e) + " is not a constructor or null");
            function t() {
                this.constructor = f
            }
            n(f, e),
            f.prototype = null === e ? Object.create(e) : (t.prototype = e.prototype,
            new t)
        }
        );
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.TestCoin__factory = void 0;
        var b = t(20698)
          , r = [{
            inputs: [{
                internalType: "string",
                name: "name",
                type: "string"
            }, {
                internalType: "string",
                name: "symbol",
                type: "string"
            }, {
                internalType: "uint256",
                name: "initialSupply",
                type: "uint256"
            }],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Approval",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Transfer",
            type: "event"
        }, {
            inputs: [{
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                internalType: "address",
                name: "spender",
                type: "address"
            }],
            name: "allowance",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "approve",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "account",
                type: "address"
            }],
            name: "balanceOf",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "decimals",
            outputs: [{
                internalType: "uint8",
                name: "",
                type: "uint8"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256"
            }],
            name: "decreaseAllowance",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256"
            }],
            name: "increaseAllowance",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "mint",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "name",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "symbol",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalSupply",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "transfer",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "from",
                type: "address"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "transferFrom",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }]
          , d = "0x60806040523480156200001157600080fd5b5060405162001cd238038062001cd28339818101604052810190620000379190620003bf565b828281600390816200004a91906200069a565b5080600490816200005c91906200069a565b5050506200007133826200007a60201b60201c565b5050506200089c565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620000ec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000e390620007e2565b60405180910390fd5b6200010060008383620001e760201b60201c565b806002600082825462000114919062000833565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620001c791906200087f565b60405180910390a3620001e360008383620001ec60201b60201c565b5050565b505050565b505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200025a826200020f565b810181811067ffffffffffffffff821117156200027c576200027b62000220565b5b80604052505050565b600062000291620001f1565b90506200029f82826200024f565b919050565b600067ffffffffffffffff821115620002c257620002c162000220565b5b620002cd826200020f565b9050602081019050919050565b60005b83811015620002fa578082015181840152602081019050620002dd565b60008484015250505050565b60006200031d6200031784620002a4565b62000285565b9050828152602081018484840111156200033c576200033b6200020a565b5b62000349848285620002da565b509392505050565b600082601f83011262000369576200036862000205565b5b81516200037b84826020860162000306565b91505092915050565b6000819050919050565b620003998162000384565b8114620003a557600080fd5b50565b600081519050620003b9816200038e565b92915050565b600080600060608486031215620003db57620003da620001fb565b5b600084015167ffffffffffffffff811115620003fc57620003fb62000200565b5b6200040a8682870162000351565b935050602084015167ffffffffffffffff8111156200042e576200042d62000200565b5b6200043c8682870162000351565b92505060406200044f86828701620003a8565b9150509250925092565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620004ac57607f821691505b602082108103620004c257620004c162000464565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200052c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620004ed565b620005388683620004ed565b95508019841693508086168417925050509392505050565b6000819050919050565b60006200057b620005756200056f8462000384565b62000550565b62000384565b9050919050565b6000819050919050565b62000597836200055a565b620005af620005a68262000582565b848454620004fa565b825550505050565b600090565b620005c6620005b7565b620005d38184846200058c565b505050565b5b81811015620005fb57620005ef600082620005bc565b600181019050620005d9565b5050565b601f8211156200064a576200061481620004c8565b6200061f84620004dd565b810160208510156200062f578190505b620006476200063e85620004dd565b830182620005d8565b50505b505050565b600082821c905092915050565b60006200066f600019846008026200064f565b1980831691505092915050565b60006200068a83836200065c565b9150826002028217905092915050565b620006a58262000459565b67ffffffffffffffff811115620006c157620006c062000220565b5b620006cd825462000493565b620006da828285620005ff565b600060209050601f831160018114620007125760008415620006fd578287015190505b6200070985826200067c565b86555062000779565b601f1984166200072286620004c8565b60005b828110156200074c5784890151825560018201915060208501945060208101905062000725565b868310156200076c578489015162000768601f8916826200065c565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000620007ca601f8362000781565b9150620007d78262000792565b602082019050919050565b60006020820190508181036000830152620007fd81620007bb565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620008408262000384565b91506200084d8362000384565b925082820190508082111562000868576200086762000804565b5b92915050565b620008798162000384565b82525050565b60006020820190506200089660008301846200086e565b92915050565b61142680620008ac6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806340c10f191161007157806340c10f19146101a357806370a08231146101bf57806395d89b41146101ef578063a457c2d71461020d578063a9059cbb1461023d578063dd62ed3e1461026d576100b4565b806306fdde03146100b9578063095ea7b3146100d757806318160ddd1461010757806323b872dd14610125578063313ce567146101555780633950935114610173575b600080fd5b6100c161029d565b6040516100ce9190610c97565b60405180910390f35b6100f160048036038101906100ec9190610d52565b61032f565b6040516100fe9190610dad565b60405180910390f35b61010f610352565b60405161011c9190610dd7565b60405180910390f35b61013f600480360381019061013a9190610df2565b61035c565b60405161014c9190610dad565b60405180910390f35b61015d61038b565b60405161016a9190610e61565b60405180910390f35b61018d60048036038101906101889190610d52565b610394565b60405161019a9190610dad565b60405180910390f35b6101bd60048036038101906101b89190610d52565b6103cb565b005b6101d960048036038101906101d49190610e7c565b6103d9565b6040516101e69190610dd7565b60405180910390f35b6101f7610421565b6040516102049190610c97565b60405180910390f35b61022760048036038101906102229190610d52565b6104b3565b6040516102349190610dad565b60405180910390f35b61025760048036038101906102529190610d52565b61052a565b6040516102649190610dad565b60405180910390f35b61028760048036038101906102829190610ea9565b61054d565b6040516102949190610dd7565b60405180910390f35b6060600380546102ac90610f18565b80601f01602080910402602001604051908101604052809291908181526020018280546102d890610f18565b80156103255780601f106102fa57610100808354040283529160200191610325565b820191906000526020600020905b81548152906001019060200180831161030857829003601f168201915b5050505050905090565b60008061033a6105d4565b90506103478185856105dc565b600191505092915050565b6000600254905090565b6000806103676105d4565b90506103748582856107a5565b61037f858585610831565b60019150509392505050565b60006012905090565b60008061039f6105d4565b90506103c08185856103b1858961054d565b6103bb9190610f78565b6105dc565b600191505092915050565b6103d58282610aa7565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461043090610f18565b80601f016020809104026020016040519081016040528092919081815260200182805461045c90610f18565b80156104a95780601f1061047e576101008083540402835291602001916104a9565b820191906000526020600020905b81548152906001019060200180831161048c57829003601f168201915b5050505050905090565b6000806104be6105d4565b905060006104cc828661054d565b905083811015610511576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105089061101e565b60405180910390fd5b61051e82868684036105dc565b60019250505092915050565b6000806105356105d4565b9050610542818585610831565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361064b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610642906110b0565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b190611142565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107989190610dd7565b60405180910390a3505050565b60006107b1848461054d565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461082b578181101561081d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610814906111ae565b60405180910390fd5b61082a84848484036105dc565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089790611240565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361090f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610906906112d2565b60405180910390fd5b61091a838383610bfd565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156109a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099790611364565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a8e9190610dd7565b60405180910390a3610aa1848484610c02565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b16576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0d906113d0565b60405180910390fd5b610b2260008383610bfd565b8060026000828254610b349190610f78565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610be59190610dd7565b60405180910390a3610bf960008383610c02565b5050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c41578082015181840152602081019050610c26565b60008484015250505050565b6000601f19601f8301169050919050565b6000610c6982610c07565b610c738185610c12565b9350610c83818560208601610c23565b610c8c81610c4d565b840191505092915050565b60006020820190508181036000830152610cb18184610c5e565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610ce982610cbe565b9050919050565b610cf981610cde565b8114610d0457600080fd5b50565b600081359050610d1681610cf0565b92915050565b6000819050919050565b610d2f81610d1c565b8114610d3a57600080fd5b50565b600081359050610d4c81610d26565b92915050565b60008060408385031215610d6957610d68610cb9565b5b6000610d7785828601610d07565b9250506020610d8885828601610d3d565b9150509250929050565b60008115159050919050565b610da781610d92565b82525050565b6000602082019050610dc26000830184610d9e565b92915050565b610dd181610d1c565b82525050565b6000602082019050610dec6000830184610dc8565b92915050565b600080600060608486031215610e0b57610e0a610cb9565b5b6000610e1986828701610d07565b9350506020610e2a86828701610d07565b9250506040610e3b86828701610d3d565b9150509250925092565b600060ff82169050919050565b610e5b81610e45565b82525050565b6000602082019050610e766000830184610e52565b92915050565b600060208284031215610e9257610e91610cb9565b5b6000610ea084828501610d07565b91505092915050565b60008060408385031215610ec057610ebf610cb9565b5b6000610ece85828601610d07565b9250506020610edf85828601610d07565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610f3057607f821691505b602082108103610f4357610f42610ee9565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f8382610d1c565b9150610f8e83610d1c565b9250828201905080821115610fa657610fa5610f49565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611008602583610c12565b915061101382610fac565b604082019050919050565b6000602082019050818103600083015261103781610ffb565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061109a602483610c12565b91506110a58261103e565b604082019050919050565b600060208201905081810360008301526110c98161108d565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b600061112c602283610c12565b9150611137826110d0565b604082019050919050565b6000602082019050818103600083015261115b8161111f565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611198601d83610c12565b91506111a382611162565b602082019050919050565b600060208201905081810360008301526111c78161118b565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061122a602583610c12565b9150611235826111ce565b604082019050919050565b600060208201905081810360008301526112598161121d565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006112bc602383610c12565b91506112c782611260565b604082019050919050565b600060208201905081810360008301526112eb816112af565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b600061134e602683610c12565b9150611359826112f2565b604082019050919050565b6000602082019050818103600083015261137d81611341565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006113ba601f83610c12565b91506113c582611384565b602082019050919050565b600060208201905081810360008301526113e9816113ad565b905091905056fea2646970667358221220fae4255eaed03b16265ff8c5439e75be7e7c2fe76eaa9af523f98f649b64c33364736f6c63430008110033";
        e.TestCoin__factory = function(f) {
            function e() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                var n = this;
                return e.length > 1 ? f.apply(this, e) || this : f.call(this, r, d, e[0]) || this
            }
            return a(e, f),
            e.prototype.deploy = function(e, t, n, a) {
                return f.prototype.deploy.call(this, e, t, n, a || {})
            }
            ,
            e.prototype.getDeployTransaction = function(e, t, n, a) {
                return f.prototype.getDeployTransaction.call(this, e, t, n, a || {})
            }
            ,
            e.prototype.attach = function(e) {
                return f.prototype.attach.call(this, e)
            }
            ,
            e.prototype.connect = function(e) {
                return f.prototype.connect.call(this, e)
            }
            ,
            e.createInterface = function() {
                return new b.utils.Interface(r)
            }
            ,
            e.connect = function(f, e) {
                return new b.Contract(f,r,e)
            }
            ,
            e.bytecode = d,
            e.abi = r,
            e
        }(b.ContractFactory)
    },
    4973: function(f, e, t) {
        var n = Object.create ? function(f, e, t, n) {
            void 0 === n && (n = t);
            var a = Object.getOwnPropertyDescriptor(e, t);
            (!a || ("get"in a ? !e.__esModule : a.writable || a.configurable)) && (a = {
                enumerable: !0,
                get: function() {
                    return e[t]
                }
            }),
            Object.defineProperty(f, n, a)
        }
        : function(f, e, t, n) {
            void 0 === n && (n = t),
            f[n] = e[t]
        }
          , a = Object.create ? function(f, e) {
            Object.defineProperty(f, "default", {
                enumerable: !0,
                value: e
            })
        }
        : function(f, e) {
            f.default = e
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.TestCoin__factory = e.FiatPurchase__factory = e.BuyMeme__factory = e.mmtrSol = void 0,
        e.mmtrSol = function(f) {
            if (f && f.__esModule)
                return f;
            var e = {};
            if (null != f)
                for (var t in f)
                    "default" !== t && Object.prototype.hasOwnProperty.call(f, t) && n(e, f, t);
            return a(e, f),
            e
        }(t(33013));
        var b = t(89050);
        Object.defineProperty(e, "BuyMeme__factory", {
            enumerable: !0,
            get: function() {
                return b.BuyMeme__factory
            }
        });
        var r = t(57959);
        Object.defineProperty(e, "FiatPurchase__factory", {
            enumerable: !0,
            get: function() {
                return r.FiatPurchase__factory
            }
        });
        var d = t(69885);
        Object.defineProperty(e, "TestCoin__factory", {
            enumerable: !0,
            get: function() {
                return d.TestCoin__factory
            }
        })
    },
    16620: function(f, e, t) {
        var n = Object.create ? function(f, e, t, n) {
            void 0 === n && (n = t);
            var a = Object.getOwnPropertyDescriptor(e, t);
            (!a || ("get"in a ? !e.__esModule : a.writable || a.configurable)) && (a = {
                enumerable: !0,
                get: function() {
                    return e[t]
                }
            }),
            Object.defineProperty(f, n, a)
        }
        : function(f, e, t, n) {
            void 0 === n && (n = t),
            f[n] = e[t]
        }
          , a = Object.create ? function(f, e) {
            Object.defineProperty(f, "default", {
                enumerable: !0,
                value: e
            })
        }
        : function(f, e) {
            f.default = e
        }
          , b = function(f) {
            if (f && f.__esModule)
                return f;
            var e = {};
            if (null != f)
                for (var t in f)
                    "default" !== t && Object.prototype.hasOwnProperty.call(f, t) && n(e, f, t);
            return a(e, f),
            e
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.contracts = e.openzeppelin = void 0,
        e.openzeppelin = b(t(13630)),
        e.contracts = b(t(4973))
    },
    37575: function(f, e, t) {
        var n = Object.create ? function(f, e, t, n) {
            void 0 === n && (n = t);
            var a = Object.getOwnPropertyDescriptor(e, t);
            (!a || ("get"in a ? !e.__esModule : a.writable || a.configurable)) && (a = {
                enumerable: !0,
                get: function() {
                    return e[t]
                }
            }),
            Object.defineProperty(f, n, a)
        }
        : function(f, e, t, n) {
            void 0 === n && (n = t),
            f[n] = e[t]
        }
          , a = Object.create ? function(f, e) {
            Object.defineProperty(f, "default", {
                enumerable: !0,
                value: e
            })
        }
        : function(f, e) {
            f.default = e
        }
        ;
        e.My = e.jk = e.w6 = void 0,
        function(f) {
            if (!f || !f.__esModule) {
                var e = {};
                if (null != f)
                    for (var t in f)
                        "default" !== t && Object.prototype.hasOwnProperty.call(f, t) && n(e, f, t);
                a(e, f)
            }
        }(t(16620));
        var b = t(4634);
        Object.defineProperty(e, "w6", {
            enumerable: !0,
            get: function() {
                return b.ERC20__factory
            }
        }),
        t(62870),
        t(97658),
        t(99220);
        var r = t(89050);
        Object.defineProperty(e, "jk", {
            enumerable: !0,
            get: function() {
                return r.BuyMeme__factory
            }
        }),
        t(57959),
        t(55584);
        var d = t(69885);
        Object.defineProperty(e, "My", {
            enumerable: !0,
            get: function() {
                return d.TestCoin__factory
            }
        })
    },
    70627: function(f, e, t) {
        t.d(e, {
            pC: function() {
                return O
            },
            ON: function() {
                return x
            },
            VP: function() {
                return _
            }
        });
        var n, a = t(37575), b = t(77328), r = t(95913), d = t(34244), c = t.n(d), i = t(10528), o = t(87622), u = t.n(o), s = t(34519), p = t.n(s), l = t(79381), y = t(62357);
        c()(0);
        let m = {
            name: "Unknown",
            symbol: "Unknown",
            decimals: 8,
            logoURI: "",
            id: "",
            priceUSDNum: 0,
            priceUSD: "0",
            price: c()(0),
            toUSDValue: ()=>0,
            toUSDValueStr: ()=>"0",
            toAmount: ()=>c()(0),
            toAmountStr: ()=>"0",
            toLamports: ()=>c()(0),
            formatAmount: ()=>"0",
            amountToUSD: ()=>0,
            amountToUSDStr: ()=>"0",
            toBalance: ()=>({
                amount: "0",
                amountNum: 0,
                valueUSD: "0",
                lamports: c()(0),
                valueUSDNum: 0
            }),
            lamportsToBalance: ()=>({
                amount: "0",
                amountNum: 0,
                valueUSD: "0",
                lamports: c()(0),
                valueUSDNum: 0
            })
        };
        c().PE = 50;
        var v = t(29081)
          , w = t(1005)
          , T = t(2784);
        let[_,g] = (0,
        r.jk)(()=>{
            var f, e, t;
            let {web3Provider: n, currentNetwork: a, switchChain: b, networkList: r, isNetworkSupported: d} = (0,
            y.O)()
              , c = {
                isTestnet: null !== (f = null == a ? void 0 : a.testnet) && void 0 !== f && f,
                isMainnet: !(null !== (e = null == a ? void 0 : a.testnet) && void 0 !== e && e)
            }
              , i = (0,
            T.useRef)(n);
            return i.current = n,
            (0,
            T.useEffect)(()=>{
                v.TB.emit("AptosProviderChange", a, n)
            }
            , [a, n]),
            {
                readonlyProvider: (0,
                T.useMemo)(()=>new w.r(null !== (t = null == a ? void 0 : a.rpcUrls.default.http[0]) && void 0 !== t ? t : r[0].rpcUrls.default.http[0]), [null == a ? void 0 : a.rpcUrls.default.http, r]),
                provider: i.current,
                currentNetwork: a,
                isNetworkSupported: d,
                list: r,
                changeNetwork: f=>{
                    null == b || b(f)
                }
                ,
                env: c
            }
        }
        );
        ({
            ...m
        });
        let h = f=>new Proxy(f,{
            get: (f,e)=>null !== (n = f[e]) && void 0 !== n ? n : {
                lamports: c()(0)
            }
        })
          , M = ["0xdAC17F958D2ee523a2206206994597C13D831ec7", "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"]
          , O = f=>M.includes(f) ? 6 : 18
          , C = f=>{
            let {provider: e} = _()
              , {data: t=h({}), mutate: n} = (0,
            l.ZP)(["BalanceHub", f, e], async()=>{
                if (f && e) {
                    let t = [b._S, b.eC, b.NQ, "0x2522933c79fD5a63ca79B022C4013984a8EF2207", "0xC20830202c658ea44f24bd57b13284B19Ee9235D", "0x55d398326f99059ff775485246999027b3197955", "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", ...M]
                      , n = await Promise.all(t.map(async t=>{
                        if (t === b.NQ)
                            try {
                                var n, r, d;
                                let f = null !== (d = null === (n = await (null === (r = e.getSigner()) || void 0 === r ? void 0 : r.getBalance())) || void 0 === n ? void 0 : n.toString()) && void 0 !== d ? d : "0";
                                return {
                                    coinAddress: t,
                                    lamports: c()(f)
                                }
                            } catch (f) {}
                        try {
                            let n = a.w6.connect(t, e)
                              , b = (await n.balanceOf(f)).toString();
                            return {
                                coinAddress: t,
                                lamports: c()(b)
                            }
                        } catch (f) {}
                        return {
                            coinAddress: t,
                            lamports: c()(0)
                        }
                    }
                    ))
                      , r = p()(u()(n, f=>f.coinAddress), f=>({
                        lamports: f.lamports
                    }));
                    return h(r)
                }
                return h({})
            }
            , {
                refreshInterval: 6e4
            })
              , r = async(f,t,n)=>{
                let b = a.w6.connect(f, e.getSigner())
                  , r = await b.allowance(e.getSigner().getAddress(), t);
                if (r.gte(n.toString()))
                    return;
                let d = await b.approve(t, i.O$.from(n.toString()).sub(r), {});
                await d.wait()
            }
            ;
            return {
                balanceMap: t,
                refresh: ()=>n(f=>f, !0),
                approve: r
            }
        }
          , [x,P] = (0,
        r.jk)(()=>{
            let {walletAddress: f} = (0,
            y.O)();
            return C(f)
        }
        )
    },
    77328: function(f, e, t) {
        t.d(e, {
            NQ: function() {
                return r
            },
            _S: function() {
                return c
            },
            eC: function() {
                return d
            }
        });
        var n, a, b = t(34244);
        t.n(b)().PE = 50;
        let r = "0x0000000000000000000000000000000000000000"
          , d = "0xc6e7DF5E7b4f2A278906862b61205850344D4e7d"
          , c = "0xA6a402005eB61F74d962eBDa8a3A7B227fbE6362";
        (n = a || (a = {})).Testnet = "testnet",
        n.Mainnet = "mainnet",
        n.Local = "local"
    },
    13463: function(f, e, t) {
        t.d(e, {
            c: function() {
                return y
            }
        });
        var n = t(37575)
          , a = t(95913)
          , b = t(34244)
          , r = t.n(b)
          , d = t(10528)
          , c = t(51906)
          , i = t(58105)
          , o = t(2784)
          , u = t(70627)
          , s = t(77328)
          , p = t(38936)
          , l = t(62357);
        let[y] = (0,
        a.jk)(()=>{
            let {provider: f, readonlyProvider: e, currentNetwork: t} = (0,
            u.VP)()
              , {approve: a} = (0,
            u.ON)()
              , {sdk: b, testcoinSDK: y, contractAddr: m} = (0,
            o.useMemo)(()=>{
                let a = f ? f.getSigner() : e
                  , b = (null == t ? void 0 : t.id) === 1 ? "0x9B40425362a2C59145FB16da63F78DD8D93a4279" : "0xf4fB40257f1907e325A55fb8DC4C81B5F41F1CE2"
                  , r = n.jk.connect(b, a)
                  , d = n.My.connect(s.eC, a);
                return {
                    sdk: r,
                    testcoinSDK: d,
                    contractAddr: b
                }
            }
            , [f, e])
              , v = (0,
            p.qW)(async e=>{
                let t = await (null == f ? void 0 : f.getBalance(b.address))
                  , n = await b.adminWithdrawERC20(e, t)
                  , a = await n.wait();
                return {
                    success: 1 === a.status,
                    txId: n.hash
                }
            }
            )
              , w = (0,
            p.qW)(async f=>{
                var e;
                let t = await y.attach(f).mint(null === (e = (0,
                l.$)()) || void 0 === e ? void 0 : e.walletAddress, (0,
                i.parseEther)("10000000"))
                  , n = await t.wait();
                return {
                    success: 1 === n.status,
                    txId: n.transactionHash
                }
            }
            )
              , T = async e=>{
                var t, n;
                return f ? e === c.d ? f.getBalance(null === (n = (0,
                l.$)()) || void 0 === n ? void 0 : n.walletAddress) : y.attach(e).balanceOf(null === (t = (0,
                l.$)()) || void 0 === t ? void 0 : t.walletAddress) : d.O$.from(0)
            }
            ;
            return {
                createBuy: f=>(0,
                p.qW)(async(f,e,t)=>{
                    let n = (0,
                    i.parseUnits)(e, (0,
                    u.pC)(f));
                    if (f === s.NQ) {
                        let f = await b.userBuyTokenWithETH({
                            value: n
                        });
                        t.onConfirmed(f.hash);
                        let e = await f.wait();
                        return {
                            success: 1 === e.status,
                            txId: f.hash
                        }
                    }
                    t.onApproveStart(),
                    await a(f, b.address, r()(n.toString())),
                    t.onApproveSuccess();
                    let d = await b.userBuyTokenWithERC20(f, n);
                    t.onConfirmed(d.hash);
                    let c = await d.wait();
                    return {
                        success: 1 === c.status,
                        txId: d.hash
                    }
                }
                , f),
                sdk: b,
                faucetMintUSDC: w,
                testcoinSDK: y,
                getBalance: T,
                env: "prod",
                contractAddr: m,
                adminClaimERC20: v
            }
        }
        )
    },
    62357: function(f, e, t) {
        t.d(e, {
            $: function() {
                return n.W
            },
            O: function() {
                return n.k
            }
        });
        var n = t(39126)
    },
    29081: function(f, e, t) {
        t.d(e, {
            TB: function() {
                return b
            },
            Xn: function() {
                return a
            }
        }),
        t(34244);
        var n = t(87734);
        function a(f) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
            return "".concat(f.slice(0, e + 2), "...").concat(f.slice(-e))
        }
        t(72579),
        t(86152),
        t(1842),
        t(12436),
        t(2784),
        t(28091);
        let b = new n.Z
    },
    28091: function(f, e, t) {
        t.d(e, {
            IJ: function() {
                return n
            }
        }),
        t(34244),
        t(80537);
        let n = f=>{
            let e = new Intl.NumberFormat("en-US",{
                notation: "standard",
                maximumSignificantDigits: 20
            }).format(f);
            return e
        }
    },
    13152: function(f, e, t) {
        t.d(e, {
            O: function() {
                return h
            }
        });
        var n = t(41237)
          , a = t(9058)
          , b = t(70627)
          , r = t(77328)
          , d = t(13463)
          , c = t(39126)
          , i = t(75931)
          , o = t(95913)
          , u = t(75388)
          , s = t(12169)
          , p = t.n(s)
          , l = t(51906)
          , y = t(58105)
          , m = t(54073)
          , v = t.n(m)
          , w = t(2784)
          , T = t(98614)
          , _ = t(88932);
        let g = {
            local: {
                defaultNetwork: 31337,
                networks: [31337],
                methods: {
                    31337: [{
                        icon: "/icons/eth.svg",
                        name: "ETH",
                        erc20: l.d,
                        isNative: !0
                    }, {
                        icon: "/icons/usdc.svg",
                        name: "USDC",
                        erc20: r.eC
                    }]
                }
            },
            test: {
                defaultNetwork: u.ws.id,
                networks: [u.ws.id, u.d2.id],
                methods: {
                    [u.ws.id]: [{
                        icon: "/icons/eth.svg",
                        name: "ETH",
                        erc20: l.d,
                        isNative: !0
                    }, {
                        icon: "/icons/usdt.svg",
                        name: "USDT",
                        erc20: "0x2039f3B58ed4a8EDe1B6C8f43aC4c3DEe3187f7b",
                        disableFaucet: !0
                    }, {
                        icon: "/icons/usdc.svg",
                        name: "USDC",
                        erc20: "0xC20830202c658ea44f24bd57b13284B19Ee9235D"
                    }],
                    [u.d2.id]: [{
                        icon: "/icons/bnb.svg",
                        name: "BNB",
                        erc20: l.d,
                        isNative: !0
                    }, {
                        icon: "/icons/usdt.svg",
                        name: "USDT",
                        erc20: "0x2522933c79fD5a63ca79B022C4013984a8EF2207"
                    }, {
                        icon: "/icons/usdc.svg",
                        name: "USDC",
                        erc20: "0xC20830202c658ea44f24bd57b13284B19Ee9235D"
                    }]
                }
            },
            prod: {
                defaultNetwork: u.RJ.id,
                networks: [u.RJ.id, u.eG.id],
                methods: {
                    [u.RJ.id]: [{
                        icon: "/icons/eth.svg",
                        name: "ETH",
                        erc20: l.d,
                        isNative: !0
                    }, {
                        icon: "/icons/usdt.svg",
                        name: "USDT",
                        erc20: "0xdAC17F958D2ee523a2206206994597C13D831ec7"
                    }, {
                        icon: "/icons/usdc.svg",
                        name: "USDC",
                        erc20: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
                    }],
                    [u.eG.id]: [{
                        icon: "/icons/bnb.svg",
                        name: "BNB",
                        erc20: l.d,
                        isNative: !0
                    }, {
                        icon: "/icons/usdt.svg",
                        name: "USDT",
                        erc20: "0x55d398326f99059ff775485246999027b3197955"
                    }, {
                        icon: "/icons/usdc.svg",
                        name: "USDC",
                        erc20: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"
                    }]
                }
            }
        }
          , [h,M] = (0,
        o.jk)(()=>{
            var f, e, t, r, o;
            let u = (0,
            w.useRef)(0)
              , {connect: s, walletAddress: l, currentNetwork: m, switchChain: h, currentWalletChainId: M, manuallyTriggerConnect: O, walletName: C} = (0,
            c.k)()
              , {t: x} = (0,
            T.$G)()
              , P = null == m ? void 0 : m.id
              , {createBuy: S, env: j} = (0,
            d.c)()
              , A = g[j]
              , {data: N={
                raised: 0,
                goal: 0,
                progress: 0,
                currentPrice: "0",
                nextPrice: "0",
                currentExchange: "0",
                priceIncreasePct: 0,
                stageIndex: 0,
                stageSoldUSD: 0,
                stageTargetUSD: 0,
                stageTotalTargetUSD: 0,
                currentPriceNum: 0
            }, refetch: k} = n.SX.getState.useQuery()
              , {data: D={
                purchased: 0
            }, refetch: E} = n.SX.getPurchasedAmount.useQuery({
                wallet: l
            }, {
                enabled: !!l
            })
              , {balanceMap: I, refresh: F} = (0,
            b.ON)()
              , R = null !== (t = A.methods[null != P ? P : A.defaultNetwork]) && void 0 !== t ? t : A.methods[A.defaultNetwork]
              , [B,U] = (0,
            w.useState)(!1)
              , V = R ? null == R ? void 0 : null === (f = R.find(f=>"USDT" === f.name)) || void 0 === f ? void 0 : f.erc20 : void 0
              , W = [...R, {
                icon: "/icons/credit-card.svg",
                name: "CARD",
                erc20: V,
                isNative: !1,
                isCard: !0,
                disableFaucet: !0
            }]
              , [H,J] = (0,
            w.useState)(W[0].name)
              , [q,Q] = (0,
            w.useState)("0")
              , [$,L] = (0,
            w.useState)("0")
              , [Z,G] = (0,
            w.useState)(0)
              , [X,z] = (0,
            w.useState)(!1)
              , [K,Y] = (0,
            w.useState)(!1)
              , ff = null !== (r = W.find(f=>f.name === H)) && void 0 !== r ? r : R[0]
              , fe = B ? "USD" : ff.name
              , ft = B ? "/icons/usd.svg" : ff.icon
              , fn = (null == ff ? void 0 : ff.erc20) ? Number((0,
            y.formatUnits)(null !== (o = null === (e = I[ff.erc20]) || void 0 === e ? void 0 : e.lamports.toString()) && void 0 !== o ? o : "0", (0,
            b.pC)(ff.erc20))) : void 0
              , fa = (null == ff ? void 0 : ff.erc20) ? ff.name : void 0
              , fb = async()=>{
                if (!P)
                    return;
                if (!l) {
                    _.Am.error("Please connect wallet");
                    return
                }
                if (0 === Number(q) || Number.isNaN(Number(q))) {
                    _.Am.error("Please input purchase amount");
                    return
                }
                let f = Number($) * N.currentPriceNum
                  , e = Number($)
                  , t = N.currentPriceNum;
                (0,
                a.B2)("swapAmount", {
                    walletAddress: l,
                    swapFromCurrency: fe,
                    swapFromValue: q,
                    swapToValue: e,
                    currentStagePrice: t,
                    swapUSDValue: f
                });
                let b = async function(f) {
                    var e;
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P
                      , a = await n.J0.getFaitOrder.query({
                        txId: f,
                        chainId: t
                    })
                      , b = 0;
                    for (; b < 8 && !(null === (e = a) || void 0 === e ? void 0 : e.memeAmount); )
                        await new Promise(f=>setTimeout(f, 1e3)),
                        a = await n.J0.getFaitOrder.query({
                            txId: f,
                            chainId: t
                        }),
                        b++;
                    return a
                };
                if (B) {
                    _.Am.promise(n.J0.getFaitObject.query({
                        amount: Number(q),
                        wallet: l
                    }), {
                        success: x("dex.validated"),
                        error: x("dex.validateFailed"),
                        pending: x("dex.validating")
                    }).then(n=>{
                        let r = new (p())({
                            ...n,
                            extra: {
                                item_info: {
                                    author: "Memeinator",
                                    name: "MMTR",
                                    seller: "Memeinator"
                                }
                            },
                            commodities: '[{"commodity":"ETH","network":"ethereum"}]',
                            widgetLayoutMode: "Modal",
                            listeners: {
                                close: ()=>{
                                    E(),
                                    k(),
                                    Y(!1),
                                    console.log("Payment Modal Closed")
                                }
                                ,
                                "payment-status": async n=>{
                                    if ("success" === n.status) {
                                        let r = n.tx_id;
                                        (0,
                                        a.B2)("confirmTransaction", {
                                            walletAddress: l,
                                            swapFromCurrency: fe,
                                            swapFromValue: q,
                                            swapToValue: e,
                                            currentStagePrice: t,
                                            swapUSDValue: f,
                                            txId: n.tx_id
                                        }),
                                        await _.Am.promise((async()=>{
                                            let f = await b(r, A.defaultNetwork);
                                            (null == f ? void 0 : f.memeAmount) && (null == f ? void 0 : f.usdVal) && ((0,
                                            a.B2)("swapSuccessful", {
                                                walletAddress: l,
                                                swapFromCurrency: fe,
                                                swapFromValue: q,
                                                swapToValue: Number(f.memeAmount),
                                                currentStagePrice: t,
                                                swapUSDValue: Number(f.usdVal),
                                                txId: n.tx_id
                                            }),
                                            await Promise.all([k(), E()]))
                                        }
                                        )(), {
                                            success: x("dex.validated"),
                                            error: x("dex.validateFailed"),
                                            pending: x("dex.validating")
                                        })
                                    }
                                }
                            }
                        });
                        r.mount(),
                        Y(!0)
                    }
                    );
                    return
                }
                if (!(null == ff ? void 0 : ff.erc20))
                    return;
                z(!0);
                let r = S({
                    sendingTitle: x("dex.sendingText"),
                    sendSuccessContent: x("dex.txConfirmed"),
                    sendSuccessTitle: x("dex.txConfirmed")
                })
                  , d = await r(ff.erc20, q, {
                    onApproveStart: ()=>{
                        (0,
                        a.dE)({
                            sourceToken: ff.name,
                            walletAddress: l
                        })
                    }
                    ,
                    onApproveSuccess: ()=>{
                        (0,
                        a.Ue)({
                            sourceToken: ff.name,
                            walletAddress: l
                        })
                    }
                    ,
                    onConfirmed: b=>{
                        n.J0.checkOrder.mutate({
                            txId: b,
                            chainId: P
                        }),
                        (0,
                        a.B2)("confirmTransaction", {
                            walletAddress: l,
                            swapFromCurrency: fe,
                            swapFromValue: q,
                            swapToValue: e,
                            currentStagePrice: t,
                            swapUSDValue: f,
                            txId: b
                        })
                    }
                });
                Q("0"),
                L("0"),
                F(),
                d && await _.Am.promise((async()=>{
                    let f = await b(d.txId);
                    f && ((0,
                    a.B2)("swapSuccessful", {
                        walletAddress: l,
                        swapFromCurrency: fe,
                        swapFromValue: q,
                        swapToValue: Number(f.memeAmount),
                        currentStagePrice: t,
                        swapUSDValue: Number(f.usdVal),
                        txId: d.txId
                    }),
                    await Promise.all([k(), E()]))
                }
                )(), {
                    success: x("dex.validated"),
                    error: x("dex.validateFailed"),
                    pending: x("dex.validating")
                }),
                z(!1)
            }
              , fr = !l || M === A.defaultNetwork
              , fd = !A.networks.includes(null != P ? P : 0)
              , fc = async()=>{
                if (h) {
                    if ((0,
                    i.t)() && "WalletConnect" === C) {
                        _.Am.info(x("dex.changeManually"));
                        return
                    }
                    await _.Am.promise(h(A.defaultNetwork), {
                        pending: x("dex.switching"),
                        success: x("dex.switched"),
                        error: {
                            render: f=>{
                                let {data: e} = f;
                                return e.message
                            }
                        }
                    }),
                    Q(""),
                    L("")
                }
            }
              , fi = async()=>{
                let f = A.networks.filter(f=>f !== P)[0];
                if (!l) {
                    s();
                    return
                }
                if ((0,
                i.t)() && "WalletConnect" === C) {
                    _.Am.info(x("dex.changeManually"));
                    return
                }
                f && h && (await _.Am.promise(h(f), {
                    pending: x("dex.switching"),
                    success: x("dex.switched"),
                    error: {
                        render: f=>{
                            let {data: e} = f;
                            return e.message
                        }
                    }
                }),
                Q(""),
                L(""))
            }
              , fo = (0,
            w.useMemo)(()=>v()(async(f,e)=>{
                if (Number.isNaN(e) || 0 === Number(e))
                    return;
                let t = u.current
                  , {expectReceive: a, actualCost: b, reward: r} = await n.J0.getTokenAmountWithMeme.query({
                    erc20: f,
                    amount: e,
                    chainId: null != P ? P : A.defaultNetwork
                });
                t === u.current && (Q(a),
                L(f=>Number(f) === Number(b) ? f : b),
                G(r))
            }
            , 300), [P, A.defaultNetwork])
              , fu = (0,
            w.useMemo)(()=>v()(async(f,e)=>{
                if (Number.isNaN(e) || 0 === Number(e))
                    return;
                let t = u.current
                  , {expectReceive: a, actualCost: b, reward: r} = await n.J0.getMemeAmountWithToken.query({
                    erc20: f,
                    amount: e,
                    chainId: null != P ? P : A.defaultNetwork
                });
                t === u.current && (L(a),
                Q(f=>Number(f) === Number(b) ? f : b),
                G(r))
            }
            , 300), [P, A.defaultNetwork]);
            return (0,
            w.useEffect)(()=>{
                l && C && (O.current ? (0,
                a.R4)(l, C) : (0,
                a.Qy)(l, C))
            }
            , [l, C]),
            (0,
            w.useEffect)(()=>{
                let f = setInterval(()=>{
                    k()
                }
                , 5e3);
                return ()=>{
                    clearInterval(f)
                }
            }
            , []),
            {
                state: N,
                isWrongNetwork: fd,
                resetNetwork: fc,
                buyMethods: W,
                currentMethod: ff,
                purchaseAmount: l && D.purchased > 0 ? D.purchased : void 0,
                setCurrentMethod: f=>{
                    let e = W.find(e=>e.name === f);
                    J(f),
                    (null == e ? void 0 : e.erc20) && fu(e.erc20, q)
                }
                ,
                walletConnected: !!l,
                connectWallet: ()=>{
                    (0,
                    a.mZ)(),
                    s()
                }
                ,
                buy: fb,
                switchNetwork: fi,
                inputAmount: q,
                setInputAmount: f=>{
                    if (u.current++,
                    "" === f) {
                        L("0"),
                        Q("");
                        return
                    }
                    Q(f),
                    B ? fu(V, f) : ff.erc20 && fu(ff.erc20, f)
                }
                ,
                receiveAmount: $,
                setReceiveAmount: f=>{
                    if ("" === f) {
                        u.current++,
                        L(""),
                        Q("0");
                        return
                    }
                    u.current++,
                    L(f),
                    B ? fo(V, f) : ff.erc20 && fo(ff.erc20, f)
                }
                ,
                currentUnit: fe,
                currentIcon: ft,
                balance: B ? void 0 : null != fn ? fn : 0,
                balanceUnit: fa,
                loading: X,
                insufficientBalance: void 0 !== fn && !B && fn < Number(q),
                isETH: fr,
                isUsingCard: B,
                setIsUsingCard: U,
                isInCardPurchase: K,
                setIsInCardPurchase: Y,
                walletAddress: l,
                rewardAmount: Z
            }
        }
        )
    },
    9058: function(f, e, t) {
        t.d(e, {
            B2: function() {
                return i
            },
            Qy: function() {
                return r
            },
            R4: function() {
                return b
            },
            Ue: function() {
                return c
            },
            dE: function() {
                return d
            },
            mZ: function() {
                return a
            }
        });
        let n = (f,e)=>{
            console.log("[\uD83D\uDE80 report]", e, f);
            let t = window.dataLayer;
            t && t.push({
                event: null != e ? e : "workflowStep",
                ...f
            })
        }
          , a = ()=>{
            n({
                workflowName: "connectWallet",
                workflowStepNumber: 1,
                workflowCompleteFlag: 0,
                workflowStepName: "start"
            })
        }
          , b = (f,e)=>{
            n({
                workflowName: "connectWallet",
                workflowStepNumber: 2,
                workflowCompleteFlag: 1,
                walletAddress: f,
                walletName: e,
                workflowStepName: "successful"
            })
        }
          , r = (f,e)=>{
            n({
                workflowStepName: "isReconnected",
                workflowStepNumber: 2,
                workflowName: "connectWallet",
                workflowCompleteFlag: 1,
                walletAddress: f,
                walletName: e
            })
        }
          , d = f=>{
            n({
                workflowName: "approve".concat(f.sourceToken),
                workflowStepNumber: 1,
                workflowStepName: "start",
                workflowCompleteFlag: 0,
                walletAddress: f.walletAddress
            })
        }
          , c = f=>{
            n({
                workflowName: "approve".concat(f.sourceToken),
                workflowStepNumber: 2,
                workflowStepName: "complete",
                workflowCompleteFlag: 1,
                walletAddress: f.walletAddress
            })
        }
          , i = (f,e)=>{
            n({
                workflowName: "swap",
                workflowStepNumber: "swapAmount" === f ? 1 : "confirmTransaction" === f ? 2 : "swapSuccessful" === f ? 3 : 0,
                workflowStepName: f,
                workflowCompleteFlag: "swapSuccessful" === f ? 1 : 0,
                walletAddress: e.walletAddress,
                swapFromCurrency: e.swapFromCurrency,
                swapFromValue: e.swapFromValue,
                swapToCurrency: "MMTR",
                swapToValue: e.swapToValue,
                tokenPrice: e.currentStagePrice.toString(),
                ..."swapSuccessful" === f ? {
                    transactionId: e.txId
                } : {}
            }),
            "swapSuccessful" === f && (n({
                ecommerce: {
                    currency: "USD",
                    value: e.swapUSDValue,
                    transaction_id: e.txId,
                    items: [{
                        item_name: "MMTR",
                        item_id: "MMTR_ID",
                        price: e.currentStagePrice,
                        item_brand: e.swapFromCurrency,
                        quantity: e.swapToValue
                    }]
                }
            }, "purchase"),
            function(f, e, t) {
                let n = [35611784, 35611790, 35611791, 35611788, 35611829, 35611831, 35641872, 35641875]
                  , a = encodeURIComponent("USD")
                  , b = encodeURIComponent(e)
                  , r = encodeURIComponent(t);
                [1744703, 1744706, 1744704, 1744705, 1744708, 1744709, 1745507, 1745508].forEach((f,e)=>{
                    let t = function(f, e) {
                        let t = document.createElement("script");
                        return t.type = "text/javascript",
                        t.async = !0,
                        t.src = "".concat("https://secure.adnxs.com/px?", "id=").concat(f, "&seg=").concat(e, "&other=").concat(a, ":").concat(r, "&order_id=").concat(b, "&t=1"),
                        t
                    }(f, n[e]);
                    document.body.appendChild(t)
                }
                )
            }(0, e.txId, e.swapUSDValue.toString()))
        }
    }
}]);
