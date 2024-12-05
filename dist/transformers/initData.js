"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initData = void 0;
var serializeParams_js_1 = require("./serializeParams.js");
var object_js_1 = require("./object.js");
var searchParams_js_1 = require("./searchParams.js");
var date_js_1 = require("./date.js");
var number_js_1 = require("./number.js");
var string_js_1 = require("./string.js");
var boolean_js_1 = require("./boolean.js");
function toSnakeCaseSource(schema) {
    for (var key in schema) {
        schema[key] = [(0, serializeParams_js_1.camelToSnake)(key), schema[key]];
    }
    return schema;
}
var initData = function (optional) {
    var number = (0, number_js_1.number)();
    var numberOptional = (0, number_js_1.number)(true);
    var string = (0, string_js_1.string)();
    var stringOptional = (0, string_js_1.string)(true);
    var boolOptional = (0, boolean_js_1.boolean)(true);
    var user = (0, object_js_1.object)(toSnakeCaseSource({
        addedToAttachmentMenu: boolOptional,
        allowsWriteToPm: boolOptional,
        firstName: string,
        id: number,
        isBot: boolOptional,
        isPremium: boolOptional,
        languageCode: stringOptional,
        lastName: stringOptional,
        photoUrl: stringOptional,
        username: stringOptional,
    }), "User")(true);
    // console.log({ transformedUser: user });
    // Custom transform function for 'signature' with default value 'unsigned'
    var signatureTransform = function (value) {
        if (typeof value === "string") {
            return value;
        }
        return "unsigned";
    };
    return (0, searchParams_js_1.searchParams)(toSnakeCaseSource({
        authDate: (0, date_js_1.date)(),
        canSendAfter: numberOptional,
        chat: (0, object_js_1.object)(toSnakeCaseSource({
            id: number,
            type: string,
            title: string,
            photoUrl: stringOptional,
            username: stringOptional,
        }), "Chat")(true),
        chatInstance: stringOptional,
        chatType: stringOptional,
        hash: string,
        queryId: stringOptional,
        receiver: user,
        startParam: stringOptional,
        // signature: string,
        signature: signatureTransform,
        user: user,
    }), "initData")(optional);
};
exports.initData = initData;
