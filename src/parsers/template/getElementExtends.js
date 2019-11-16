
import { trueTypeIs } from "../../helpers/type.js"

/**
 * Gets the extends string from the element
 * @param {HTMLElement} mewClass
 * @returns {String} extends
 */
function getElementExtends(element) {
    let extendsStr = element.extends;
    if (trueTypeIs(extendsStr, "string")) {
        extendsStr = extendsStr.trim().toLowerCase();
        extendsStr = extendsStr.length <= 0 ? undefined : extendsStr;
    } else {
        extendsStr = undefined;
    }
    return extendsStr;
}

export {
    getElementExtends
};
