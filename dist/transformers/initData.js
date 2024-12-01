import { camelToSnake } from "./serializeParams.js";
import { object } from "./object.js";
import { searchParams } from "./searchParams.js";
import { date } from "./date.js";
import { number as createNumber } from "./number.js";
import { string as createString } from "./string.js";
import { boolean as createBoolean } from "./boolean.js";
function toSnakeCaseSource(schema) {
    for (const key in schema) {
        schema[key] = [camelToSnake(key), schema[key]];
    }
    return schema;
}
export const initData = (optional) => {
    const number = createNumber();
    const numberOptional = createNumber(true);
    const string = createString();
    const stringOptional = createString(true);
    const boolOptional = createBoolean(true);
    const user = object(toSnakeCaseSource({
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
    const signatureTransform = (value) => {
        if (typeof value === "string") {
            return value;
        }
        return "unsigned";
    };
    return searchParams(toSnakeCaseSource({
        authDate: date(),
        canSendAfter: numberOptional,
        chat: object(toSnakeCaseSource({
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
        user,
    }), "initData")(optional);
};
