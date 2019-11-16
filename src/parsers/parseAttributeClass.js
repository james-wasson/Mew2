
import { getNamespace } from "./class/getNamespace.js";
import { MewAttribute } from "/src/MewAttribute.js";
import { camelToKebab } from "/src/helpers/string.js";
import { MewError } from "../MewError.js";
import { trueTypeIs } from "/src/helpers/type.js";
import { isHTMLAttribute } from "/src/helpers/html.js";

/**
 * Calls all relevant static Mew Attribute class parsers
 * These only insert themseleves in the _mew object
 * No other changes are made
 * @param {MewAttribute} attributeClass 
 * @returns {Boolean} false if the object is already present
 */
function parseAttributeClass(attributeClass) {
    if (attributeClass.hasOwnProperty("_mew")) {
        return false;
    }

    let _mew = {
        class: attributeClass,
        type: "MewAttributeClass",
        scope: "static"
    };
    attributeClass._mew = _mew;
    
    _mew.qualifier = attributeClass.qualifier;
    if (!trueTypeIs(_mew.qualifier, "string") || _mew.qualifier.length < 1 || _mew.qualifier.length > 5) {
        throw new MewError("Mew Attribute must have a valid qualifier string");
    }
    _mew.namespace = getNamespace(attributeClass.namespace, 2, 5);
    let localNameNotQualified = camelToKebab(attributeClass.name);
    _mew.localName = _mew.qualifier + "-" + localNameNotQualified;
    _mew.name = _mew.qualifier + "-" + _mew.namespace.concat([localNameNotQualified]).join('-');
    if (isHTMLAttribute(_mew.localName)) {
        throw new MewError("Mew Attribute local name (qualifier + name) cannot be a HTML Attribute name.");
    }

    let globalIsGood = trueTypeIs(attributeClass.global, {
        'undefined': () => _mew.global = false,
        'boolean': () => _mew.global = !!attributeClass.global
    });
    if (!globalIsGood) {
        throw new MewError("Mew Attribute must have global defined as a boolean.");
    }

    let controlIsGood = trueTypeIs(attributeClass.control, {
        'undefined': () => _mew.control = false,
        'boolean': () => _mew.control = !!attributeClass.control
    });
    if (!controlIsGood) {
        throw new MewError("Mew Attribute must have control defined as a boolean.");
    }

    let priorityIsGood = trueTypeIs(attributeClass.priority, {
        'undefined': () => _mew.priority = 1,
        'number': () => _mew.priority = attributeClass.priority
    });
    if (!priorityIsGood) {
        throw new MewError("Mew Attribute must have priority defined as a number.");
    }
    if (_mew.priority < 0) {
        throw new MewError("Mew Attribute must have priority defined as a number greater than zero.");
    }

    Object.freeze(_mew);
    return true;
}

export {
    parseAttributeClass
}
