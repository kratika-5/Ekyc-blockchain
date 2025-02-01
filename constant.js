"use strict";
(() => {
var exports = {};
exports.id = 161;
exports.ids = [161];
exports.modules = {

/***/ 451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": () => (/* binding */ API_URL),
/* harmony export */   "PRIVATE_KEY": () => (/* binding */ PRIVATE_KEY),
/* harmony export */   "contractAbi": () => (/* binding */ contractAbi),
/* harmony export */   "contractAddress": () => (/* binding */ contractAddress),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

const API_URL = "https://volta-rpc.energyweb.org/";
const PRIVATE_KEY = "cbe8ffe52bc6448919f7ac17b564e61f61f32c20a20aee88ad922a81ef09a3ae";
const contractAddress = "0x946c3290758076B9D49E83e1a2Fea3A8647fA501";
// In constant.js
const pinataAPIKey = "51e4706624719801a097";
const pinataAPISecret = "585dc18b631d70d04a948a88b194aad04f24027b6134d5d278b02a8baf00fdd7";

const ConstantPage = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Configuration Constants"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConstantPage);
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


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(451));
module.exports = __webpack_exports__;

})();