
import { getMewDefintions, getMewAttributeDefintions } from "./class/getMewDefintions.js";
import { getNamespace } from "./class/getNamespace.js";
import { getProps } from "./class/getProps.js";
import { Mew } from "/src/Mew.js";
import { camelToKebab } from "/src/helpers/string.js";
import { trueTypeIs } from "/src/helpers/type.js";
import { MewError } from "../MewError.js";
import { isHTMLTag } from "../helpers/html.js";
import { parseTemplate } from "./parseTemplate.js";

/**
 * Calls all relevant static Mew class parsers
 * These only insert themseleves in the _mew object
 * No other changes are made
 * @param {Mew} mewClass 
 * @returns {Boolean} false if the object is already present
 */
function parseClass(mewClass) {
    if (mewClass.hasOwnProperty("_mew")) {
        return false;
    }

    let _mew = {
        class: mewClass,
        type: "MewClass",
        scope: "static"
    };

    mewClass._mew = _mew;

    _mew.namespace = getNamespace(mewClass.namespace, 2, 30);
    _mew.localName = camelToKebab(mewClass.name);
    _mew.name = _mew.namespace.concat([_mew.localName]).join('-');
    if (_mew.name.split('-').length < 2) {
        throw new MewError("Mew must have at least one qualifier.");
    }
    if (isHTMLTag(_mew.localName)) {
        throw new MewError("Mew local name cannot be a HTML tag name.");
    }

    _mew.props = getProps(mewClass.props);

    let shadowIsGood = trueTypeIs(mewClass.shadowed, {
        'undefined': () => _mew.shadowed = true,
        'boolean': () => _mew.shadowed = !!mewClass.shadowed
    });
    if (!shadowIsGood) {
        throw new MewError("Mew must have shadowed defined as a boolean.");
    }

    _mew.children = getMewDefintions(mewClass.children);
    
    // attribute parsers
    _mew.attributes = getMewAttributeDefintions(mewClass.attributes);

    // template parsers
    parseTemplate(_mew);

    Object.freeze(_mew);
    return true;
}

export {
    parseClass
}
