import { parse } from "../lib/acorn-6.2.1/acorn-loose.js";
import { MewError } from "../MewError.js";

/**
 * Specifies a for in loop with no body
 * @param {String} string 
 * @returns {Object} Data about the for loop
 */
function forInLoop(attrName, attrValue) {
    const parsed = parse(attrValue);
    if (parsed.body.length !== 1) {
        throw new MewError(`Attribute ${attrName} is defined to be just one line.`);
    }
    if (parsed.body.length !== 1) {
        throw new MewError(`Attribute ${attrName} should have no body.`);
    }
    console.log(parsed);
}

export {
    forInLoop
}
