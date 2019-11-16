
import { MewError } from "../../MewError.js";
import { trueTypeIs } from "../../helpers/type.js";
import { camelToKebab } from "../../helpers/string.js";
import { DefineMew } from "../../Mew.js";
import { DefineMewAttribute } from "../../MewAttribute.js";
import { isHTMLAttribute, isHTMLTag } from "../../helpers/html.js";

/**
 * Parses the mew class defintions into the defintion array
 * @param {Array|undefined} defintions 
 * @param {Function} definer 
 * @param {String} nameKey 
 * @returns {Array} children
 */
function getDefintions(defintions, definer, nameKey) {
    let defintionIsGood = trueTypeIs(defintions, {
        'undefined': () => defintions = [],
        'array': () => defintions = defintions,
    });
    if (!defintionIsGood) {
        throw new MewError("Mew must have children defined as an array.");
    }
    // create defintion objects
    defintions = defintions.map(def => {
        let self = {
            alias: false
        };
        if (trueTypeIs(def, 'object')) {
            self._mew = definer(def.class)._mew;
            let defNameIsGood = trueTypeIs(def.name, {
                "undefined": () => self.localName = self._mew[nameKey],
                "string": () => {
                    self.localName = camelToKebab(def.name);
                    self.alias = true;
                }
            });
            if (!defNameIsGood) {
                throw new MewError("Defintion Alias expects name to be style of string.");
            }
        } else {
            self._mew = definer(def)._mew;
            self.localName = self._mew[nameKey];
        }
        return Object.freeze(self);
    });
    // verify defintions
    defintions.forEach((def, index) => {
        if (defintions.findIndex(other => other.localName === def.localName) !== index) {
            throw new MewError(`Duplicate Mew defintion name, use an alias: "${def.localName}"`);
        }
    });

    return Object.freeze(defintions);
}

function getMewAttributeDefintions(defintions) {
    defintions = getDefintions(defintions, DefineMewAttribute, "localName");
    for(let def of defintions) {
        if (def.alias === true) {
            if (def.localName.split('-').length < 2) {
                throw new MewError("Mew Attribute Alias must have at least one qualifier.");
            }
            if (isHTMLAttribute(def.localName)) {
                throw new MewError("Mew Attribute Alias name cannot be an HTML attribute name.");
            }
        }
    }
    return defintions;
}

function getMewDefintions(defintions) {
    defintions = getDefintions(defintions, DefineMew, "localName");
    for(let def of defintions) {
        if (def.alias === true) {
            if (isHTMLTag(def.localName)) {
                throw new MewError("Mew Alias name cannot be an HTML tag name.");
            }
        }
    }
    return defintions;
}

export {
    getMewDefintions,
    getMewAttributeDefintions
};
