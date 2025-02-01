"use strict";
(() => {
var exports = {};
exports.id = 211;
exports.ids = [211];
exports.modules = {

/***/ 741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ uploadData)
});

;// CONCATENATED MODULE: external "ethers"
const external_ethers_namespaceObject = require("ethers");
;// CONCATENATED MODULE: external "formidable"
const external_formidable_namespaceObject = require("formidable");
var external_formidable_default = /*#__PURE__*/__webpack_require__.n(external_formidable_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
;// CONCATENATED MODULE: external "react"
const external_react_namespaceObject = require("react");
;// CONCATENATED MODULE: ./pages/constant.js

const API_URL = "https://volta-rpc.energyweb.org/";
const PRIVATE_KEY = "cbe8ffe52bc6448919f7ac17b564e61f61f32c20a20aee88ad922a81ef09a3ae";
const contractAddress = "0x946c3290758076B9D49E83e1a2Fea3A8647fA501";
// In constant.js
const pinataAPIKey = "51e4706624719801a097";
const pinataAPISecret = "585dc18b631d70d04a948a88b194aad04f24027b6134d5d278b02a8baf00fdd7";

const ConstantPage = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        children: "Configuration Constants"
    });
};
/* harmony default export */ const constant = ((/* unused pure expression or super */ null && (ConstantPage)));
const contractAbi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "aadharCardNumber",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "ifscCode",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "bankAccountNumber",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "addressProofHash",
                "type": "string"
            }
        ],
        "name": "KYCSubmitted",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_dob",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_aadharCardNumber",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_ifscCode",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_bankAccountNumber",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_addressProofHash",
                "type": "string"
            }
        ],
        "name": "submitKYC",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "getKYCDetails",
        "outputs": [
            {
                "internalType": "string",
                "name": "dob",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "aadharCardNumber",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "ifscCode",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "bankAccountNumber",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "addressProofHash",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

;// CONCATENATED MODULE: ./pages/api/uploadData.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());






const config = {
    api: {
        bodyParser: false // Disabling Next.js default body parser
    }
};
async function moveFileToServer(req) {
    return new Promise((resolve, reject)=>{
        const uploadDir = external_path_default().join(process.cwd(), "/pages/uploads");
        if (!external_fs_default().existsSync(uploadDir)) external_fs_default().mkdirSync(uploadDir, {
            recursive: true
        });
        const form = external_formidable_default()({
            uploadDir,
            keepExtensions: true
        });
        form.parse(req, (err, fields, files)=>{
            if (err) {
                console.error(err);
                reject("File upload failed");
                return;
            }
            const fileData = {};
            for(const field in files){
                const file = files[field];
                const uniqueFileName = file.newFilename;
                const actualFileName = file.originalFilename;
                fileData[field] = {
                    uniqueFileName,
                    actualFileName,
                    filePath: file.filepath
                };
            }
            resolve(fileData);
        });
    });
}
async function uploadToPinata(filePath, fileName) {
    const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";
    const formData = new FormData();
    formData.append("file", external_fs_default().createReadStream(filePath));
    const metadata = JSON.stringify({
        name: fileName
    });
    formData.append("pinataMetadata", metadata);
    const options = JSON.stringify({
        cidVersion: 0
    });
    formData.append("pinataOptions", options);
    try {
        const response = await Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(url, formData, {
            maxBodyLength: "Infinity",
            headers: {
                "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
                "pinata_api_key": "51e4706624719801a097",
                "pinata_secret_api_key": "585dc18b631d70d04a948a88b194aad04f24027b6134d5d278b02a8baf00fdd7"
            }
        });
        return response.data.IpfsHash;
    } catch (error) {
        console.error("Pinata upload failed", error);
        return null;
    }
}
async function storeDataInBlockchain(actualFileName, uniqueFileName, ipfsHash) {
    const provider = new external_ethers_namespaceObject.ethers.providers.JsonRpcProvider(API_URL);
    const signer = new external_ethers_namespaceObject.ethers.Wallet(PRIVATE_KEY, provider);
    const StorageContract = new external_ethers_namespaceObject.ethers.Contract(contractAddress, contractAbi, signer);
    const isStored = await StorageContract.isFileStored(uniqueFileName);
    if (!isStored) {
        console.log("Storing the data in blockchain");
        const tx = await StorageContract.upload(uniqueFileName, ipfsHash);
        await tx.wait();
        return {
            message: `IPFS hash stored in smart contract: ${ipfsHash}`
        };
    } else {
        console.log("Data already stored for this file");
        const storedHash = await StorageContract.getIPFSHash(uniqueFileName);
        return {
            message: `IPFS hash already stored: ${storedHash}`
        };
    }
}
async function handler(req, res) {
    try {
        // Move files to the server and handle multiple fields
        const fileData = await moveFileToServer(req);
        console.log("Files stored in server");
        // Upload each file to Pinata
        const uploadPromises = [];
        const fileHashes = {};
        // Fields to upload to Pinata
        const fields = [
            "photo",
            "signature",
            "aadhar",
            "addressProof"
        ];
        fields.forEach((field)=>{
            if (fileData[field]) {
                const { uniqueFileName , actualFileName , filePath  } = fileData[field];
                uploadPromises.push(uploadToPinata(filePath, actualFileName).then((ipfsHash)=>{
                    if (ipfsHash) {
                        fileHashes[field] = ipfsHash;
                    }
                }));
            }
        });
        await Promise.all(uploadPromises);
        // If any file failed to upload to IPFS, return error
        if (Object.keys(fileHashes).length < fields.length) {
            return res.status(500).json({
                message: "Failed to upload one or more files to IPFS"
            });
        }
        // Store file hashes in the blockchain
        const blockchainResponses = [];
        for (const field of fields){
            if (fileHashes[field]) {
                const { uniqueFileName , actualFileName  } = fileData[field];
                const ipfsHash = fileHashes[field];
                const response = await storeDataInBlockchain(actualFileName, uniqueFileName, ipfsHash);
                blockchainResponses.push(response);
            }
        }
        console.log("Hashes stored in blockchain");
        return res.status(200).json({
            message: "Files uploaded successfully",
            blockchainResponses
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}
/* harmony default export */ const uploadData = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(741));
module.exports = __webpack_exports__;

})();