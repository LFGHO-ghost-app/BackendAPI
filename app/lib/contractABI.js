exports.contractABI = [
    {
        inputs: [
            {
                internalType: "contract IEntryPoint",
                name: "entryPoint",
                type: "address",
            },
            { internalType: "address", name: "factory", type: "address" },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "signer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "isAdmin",
                type: "bool",
            },
        ],
        name: "AdminUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "prevURI",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "newURI",
                type: "string",
            },
        ],
        name: "ContractURIUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint8",
                name: "version",
                type: "uint8",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "authorizingSigner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "targetSigner",
                type: "address",
            },
            {
                components: [
                    {
                        internalType: "address",
                        name: "signer",
                        type: "address",
                    },
                    { internalType: "uint8", name: "isAdmin", type: "uint8" },
                    {
                        internalType: "address[]",
                        name: "approvedTargets",
                        type: "address[]",
                    },
                    {
                        internalType: "uint256",
                        name: "nativeTokenLimitPerTransaction",
                        type: "uint256",
                    },
                    {
                        internalType: "uint128",
                        name: "permissionStartTimestamp",
                        type: "uint128",
                    },
                    {
                        internalType: "uint128",
                        name: "permissionEndTimestamp",
                        type: "uint128",
                    },
                    {
                        internalType: "uint128",
                        name: "reqValidityStartTimestamp",
                        type: "uint128",
                    },
                    {
                        internalType: "uint128",
                        name: "reqValidityEndTimestamp",
                        type: "uint128",
                    },
                    { internalType: "bytes32", name: "uid", type: "bytes32" },
                ],
                indexed: false,
                internalType:
                    "struct IAccountPermissions.SignerPermissionRequest",
                name: "permissions",
                type: "tuple",
            },
        ],
        name: "SignerPermissionsUpdated",
        type: "event",
    },
    {
        inputs: [
            { internalType: "address", name: "_signer", type: "address" },
            { internalType: "uint256", name: "_amount", type: "uint256" },
            { internalType: "bytes", name: "signature", type: "bytes" },
        ],
        name: "acceptPayment",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "_signer", type: "address" },
            { internalType: "uint256", name: "_amount", type: "uint256" },
            { internalType: "bytes", name: "signature", type: "bytes" },
        ],
        name: "acceptPaymentTwo",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "addDeposit",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "contractURI",
        outputs: [{ internalType: "string", name: "", type: "string" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "entryPoint",
        outputs: [
            { internalType: "contract IEntryPoint", name: "", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "_target", type: "address" },
            { internalType: "uint256", name: "_value", type: "uint256" },
            { internalType: "bytes", name: "_calldata", type: "bytes" },
        ],
        name: "execute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address[]", name: "_target", type: "address[]" },
            { internalType: "uint256[]", name: "_value", type: "uint256[]" },
            { internalType: "bytes[]", name: "_calldata", type: "bytes[]" },
        ],
        name: "executeBatch",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "factory",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getAllActiveSigners",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "signer",
                        type: "address",
                    },
                    {
                        internalType: "address[]",
                        name: "approvedTargets",
                        type: "address[]",
                    },
                    {
                        internalType: "uint256",
                        name: "nativeTokenLimitPerTransaction",
                        type: "uint256",
                    },
                    {
                        internalType: "uint128",
                        name: "startTimestamp",
                        type: "uint128",
                    },
                    {
                        internalType: "uint128",
                        name: "endTimestamp",
                        type: "uint128",
                    },
                ],
                internalType: "struct IAccountPermissions.SignerPermissions[]",
                name: "signers",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getAllAdmins",
        outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getAllSigners",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "signer",
                        type: "address",
                    },
                    {
                        internalType: "address[]",
                        name: "approvedTargets",
                        type: "address[]",
                    },
                    {
                        internalType: "uint256",
                        name: "nativeTokenLimitPerTransaction",
                        type: "uint256",
                    },
                    {
                        internalType: "uint128",
                        name: "startTimestamp",
                        type: "uint128",
                    },
                    {
                        internalType: "uint128",
                        name: "endTimestamp",
                        type: "uint128",
                    },
                ],
                internalType: "struct IAccountPermissions.SignerPermissions[]",
                name: "signers",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getChainId",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "bytes32", name: "_messageHash", type: "bytes32" },
        ],
        name: "getEthSignedMessageHash",
        outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [{ internalType: "bytes", name: "message", type: "bytes" }],
        name: "getMessageHash",
        outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
        name: "getMessageHash",
        outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "getNonce",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "signer", type: "address" }],
        name: "getPermissionsForSigner",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "signer",
                        type: "address",
                    },
                    {
                        internalType: "address[]",
                        name: "approvedTargets",
                        type: "address[]",
                    },
                    {
                        internalType: "uint256",
                        name: "nativeTokenLimitPerTransaction",
                        type: "uint256",
                    },
                    {
                        internalType: "uint128",
                        name: "startTimestamp",
                        type: "uint128",
                    },
                    {
                        internalType: "uint128",
                        name: "endTimestamp",
                        type: "uint128",
                    },
                ],
                internalType: "struct IAccountPermissions.SignerPermissions",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "_signer", type: "address" },
            { internalType: "uint256", name: "_amount", type: "uint256" },
            { internalType: "bytes", name: "signature", type: "bytes" },
        ],
        name: "getSignatureAddress",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "ghoBalance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "ghoToken",
        outputs: [
            { internalType: "contract IERC20", name: "", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "_defaultAdmin", type: "address" },
            { internalType: "bytes", name: "_data", type: "bytes" },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "signer", type: "address" }],
        name: "isActiveSigner",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "_account", type: "address" },
        ],
        name: "isAdmin",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "bytes32", name: "_message", type: "bytes32" },
            { internalType: "bytes", name: "_signature", type: "bytes" },
        ],
        name: "isValidSignature",
        outputs: [
            { internalType: "bytes4", name: "magicValue", type: "bytes4" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "_signer", type: "address" },
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address",
                    },
                    { internalType: "uint256", name: "nonce", type: "uint256" },
                    { internalType: "bytes", name: "initCode", type: "bytes" },
                    { internalType: "bytes", name: "callData", type: "bytes" },
                    {
                        internalType: "uint256",
                        name: "callGasLimit",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "verificationGasLimit",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxFeePerGas",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxPriorityFeePerGas",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes",
                    },
                    { internalType: "bytes", name: "signature", type: "bytes" },
                ],
                internalType: "struct UserOperation",
                name: "_userOp",
                type: "tuple",
            },
        ],
        name: "isValidSigner",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "bytes[]", name: "data", type: "bytes[]" }],
        name: "multicall",
        outputs: [
            { internalType: "bytes[]", name: "results", type: "bytes[]" },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "address", name: "", type: "address" },
            { internalType: "uint256[]", name: "", type: "uint256[]" },
            { internalType: "uint256[]", name: "", type: "uint256[]" },
            { internalType: "bytes", name: "", type: "bytes" },
        ],
        name: "onERC1155BatchReceived",
        outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "address", name: "", type: "address" },
            { internalType: "uint256", name: "", type: "uint256" },
            { internalType: "uint256", name: "", type: "uint256" },
            { internalType: "bytes", name: "", type: "bytes" },
        ],
        name: "onERC1155Received",
        outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "address", name: "", type: "address" },
            { internalType: "uint256", name: "", type: "uint256" },
            { internalType: "bytes", name: "", type: "bytes" },
        ],
        name: "onERC721Received",
        outputs: [{ internalType: "bytes4", name: "", type: "bytes4" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_ethSignedMessageHash",
                type: "bytes32",
            },
            { internalType: "bytes", name: "_signature", type: "bytes" },
        ],
        name: "recoverSigner",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "s_chainId",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "senderBalance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "string", name: "_uri", type: "string" }],
        name: "setContractURI",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IEntryPoint",
                name: "_entrypointOverride",
                type: "address",
            },
        ],
        name: "setEntrypointOverride",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "signer",
                        type: "address",
                    },
                    { internalType: "uint8", name: "isAdmin", type: "uint8" },
                    {
                        internalType: "address[]",
                        name: "approvedTargets",
                        type: "address[]",
                    },
                    {
                        internalType: "uint256",
                        name: "nativeTokenLimitPerTransaction",
                        type: "uint256",
                    },
                    {
                        internalType: "uint128",
                        name: "permissionStartTimestamp",
                        type: "uint128",
                    },
                    {
                        internalType: "uint128",
                        name: "permissionEndTimestamp",
                        type: "uint128",
                    },
                    {
                        internalType: "uint128",
                        name: "reqValidityStartTimestamp",
                        type: "uint128",
                    },
                    {
                        internalType: "uint128",
                        name: "reqValidityEndTimestamp",
                        type: "uint128",
                    },
                    { internalType: "bytes32", name: "uid", type: "bytes32" },
                ],
                internalType:
                    "struct IAccountPermissions.SignerPermissionRequest",
                name: "_req",
                type: "tuple",
            },
            { internalType: "bytes", name: "_signature", type: "bytes" },
        ],
        name: "setPermissionsForSigner",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "bytes", name: "sig", type: "bytes" }],
        name: "splitSignature",
        outputs: [
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
            { internalType: "uint8", name: "v", type: "uint8" },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            { internalType: "bytes4", name: "interfaceId", type: "bytes4" },
        ],
        name: "supportsInterface",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "sender",
                        type: "address",
                    },
                    { internalType: "uint256", name: "nonce", type: "uint256" },
                    { internalType: "bytes", name: "initCode", type: "bytes" },
                    { internalType: "bytes", name: "callData", type: "bytes" },
                    {
                        internalType: "uint256",
                        name: "callGasLimit",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "verificationGasLimit",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "preVerificationGas",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxFeePerGas",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "maxPriorityFeePerGas",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes",
                        name: "paymasterAndData",
                        type: "bytes",
                    },
                    { internalType: "bytes", name: "signature", type: "bytes" },
                ],
                internalType: "struct UserOperation",
                name: "userOp",
                type: "tuple",
            },
            { internalType: "bytes32", name: "userOpHash", type: "bytes32" },
            {
                internalType: "uint256",
                name: "missingAccountFunds",
                type: "uint256",
            },
        ],
        name: "validateUserOp",
        outputs: [
            {
                internalType: "uint256",
                name: "validationData",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "signer",
                        type: "address",
                    },
                    { internalType: "uint8", name: "isAdmin", type: "uint8" },
                    {
                        internalType: "address[]",
                        name: "approvedTargets",
                        type: "address[]",
                    },
                    {
                        internalType: "uint256",
                        name: "nativeTokenLimitPerTransaction",
                        type: "uint256",
                    },
                    {
                        internalType: "uint128",
                        name: "permissionStartTimestamp",
                        type: "uint128",
                    },
                    {
                        internalType: "uint128",
                        name: "permissionEndTimestamp",
                        type: "uint128",
                    },
                    {
                        internalType: "uint128",
                        name: "reqValidityStartTimestamp",
                        type: "uint128",
                    },
                    {
                        internalType: "uint128",
                        name: "reqValidityEndTimestamp",
                        type: "uint128",
                    },
                    { internalType: "bytes32", name: "uid", type: "bytes32" },
                ],
                internalType:
                    "struct IAccountPermissions.SignerPermissionRequest",
                name: "req",
                type: "tuple",
            },
            { internalType: "bytes", name: "signature", type: "bytes" },
        ],
        name: "verifySignerPermissionRequest",
        outputs: [
            { internalType: "bool", name: "success", type: "bool" },
            { internalType: "address", name: "signer", type: "address" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "withdrawAddress",
                type: "address",
            },
            { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "withdrawDepositTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    { stateMutability: "payable", type: "receive" },
];
