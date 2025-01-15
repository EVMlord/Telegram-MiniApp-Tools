"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudStorageUtility = void 0;
var index_js_1 = require("../index.js");
var CloudStorageUtility = /** @class */ (function () {
    function CloudStorageUtility() {
        this.CloudStorageAPI = index_js_1.webApp.CloudStorage;
        if (!this.CloudStorageAPI) {
            throw new Error("CloudStorage is not available.");
        }
    }
    /**
     * Promise-based version of `getKeys`.
     */
    CloudStorageUtility.prototype.getKeysPromise = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.CloudStorageAPI.getKeys(function (error, result) {
                if (error) {
                    reject(new Error("Failed to get keys: ".concat(error)));
                }
                else {
                    resolve(result || []);
                }
            });
        });
    };
    /**
     * Removes multiple keys and values from the cloud storage.
     * @param keys An array of keys to remove.
     */
    CloudStorageUtility.prototype.removeItemsPromise = function (keys) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.CloudStorageAPI.removeItems(keys, function (error, result) {
                if (error) {
                    reject(new Error("Failed to remove items: ".concat(error)));
                }
                else {
                    resolve(result || false);
                }
            });
        });
    };
    /**
     * Stores a value in the cloud storage with the specified key.
     * @param key The key to store the value under (1-128 characters, A-Z, a-z, 0-9, _, -).
     * @param value The value to store (0-4096 characters).
     * @param callback Optional callback.
     */
    CloudStorageUtility.prototype.setItem = function (key, value, callback) {
        var _this = this;
        if (callback) {
            this.CloudStorageAPI.setItem(key, value, callback);
        }
        else {
            return new Promise(function (resolve, reject) {
                _this.CloudStorageAPI.setItem(key, value, function (error, result) {
                    if (error) {
                        reject(new Error("Failed to set item '".concat(key, "': ").concat(error)));
                    }
                    else {
                        resolve(result || false);
                    }
                });
            });
        }
    };
    /**
     * Retrieves a value from the cloud storage by key.
     * @param key The key of the value to retrieve.
     * @param callback Optional callback.
     */
    CloudStorageUtility.prototype.getItem = function (key, callback) {
        var _this = this;
        if (callback) {
            this.CloudStorageAPI.getItem(key, callback);
        }
        else {
            return new Promise(function (resolve, reject) {
                _this.CloudStorageAPI.getItem(key, function (error, result) {
                    if (error) {
                        reject(new Error("Failed to get item '".concat(key, "': ").concat(error)));
                    }
                    else {
                        resolve(result || "");
                    }
                });
            });
        }
    };
    /**
     * Retrieves multiple values from the cloud storage by their keys.
     * @param keys An array of keys to retrieve values for.
     * @param callback Optional callback.
     */
    CloudStorageUtility.prototype.getItems = function (keys, callback) {
        var _this = this;
        if (callback) {
            this.CloudStorageAPI.getItems(keys, callback);
        }
        else {
            return new Promise(function (resolve, reject) {
                _this.CloudStorageAPI.getItems(keys, function (error, result) {
                    if (error) {
                        reject(new Error("Failed to get items: ".concat(error)));
                    }
                    else {
                        resolve(result || {});
                    }
                });
            });
        }
    };
    /**
     * Removes a value from the cloud storage by key.
     * @param key The key of the value to remove.
     * @param callback Optional callback.
     */
    CloudStorageUtility.prototype.removeItem = function (key, callback) {
        var _this = this;
        if (callback) {
            this.CloudStorageAPI.removeItem(key, callback);
        }
        else {
            return new Promise(function (resolve, reject) {
                _this.CloudStorageAPI.removeItem(key, function (error, result) {
                    if (error) {
                        reject(new Error("Failed to remove item '".concat(key, "': ").concat(error)));
                    }
                    else {
                        resolve(result || false);
                    }
                });
            });
        }
    };
    /**
     * Removes multiple values from the cloud storage by their keys.
     * @param keys An array of keys to remove.
     * @param callback Optional callback.
     */
    CloudStorageUtility.prototype.removeItems = function (keys, callback) {
        var _this = this;
        if (callback) {
            this.CloudStorageAPI.removeItems(keys, callback);
        }
        else {
            return new Promise(function (resolve, reject) {
                _this.CloudStorageAPI.removeItems(keys, function (error, result) {
                    if (error) {
                        reject(new Error("Failed to remove items: ".concat(error)));
                    }
                    else {
                        resolve(result || false);
                    }
                });
            });
        }
    };
    /**
     * Retrieves all keys stored in the cloud storage.
     * @param callback Optional callback.
     */
    CloudStorageUtility.prototype.getKeys = function (callback) {
        var _this = this;
        if (callback) {
            this.CloudStorageAPI.getKeys(callback);
        }
        else {
            return new Promise(function (resolve, reject) {
                _this.CloudStorageAPI.getKeys(function (error, result) {
                    if (error) {
                        reject(new Error("Failed to get keys: ".concat(error)));
                    }
                    else {
                        resolve(result || []);
                    }
                });
            });
        }
    };
    /**
     * Clears all keys and values in the cloud storage.
     * @returns A promise that resolves when all items are cleared.
     */
    CloudStorageUtility.prototype.clearAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var keys;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getKeysPromise()];
                    case 1:
                        keys = _a.sent();
                        if (keys.length > 0) {
                            return [2 /*return*/, this.removeItemsPromise(keys)]; // Clears all items
                        }
                        return [2 /*return*/, true]; // Nothing to clear
                }
            });
        });
    };
    /**
     * Checks if a specific key exists in the cloud storage.
     * @param key The key to check.
     */
    CloudStorageUtility.prototype.hasKey = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var keys;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getKeysPromise()];
                    case 1:
                        keys = _a.sent();
                        return [2 /*return*/, keys.includes(key)];
                }
            });
        });
    };
    return CloudStorageUtility;
}());
exports.CloudStorageUtility = CloudStorageUtility;
