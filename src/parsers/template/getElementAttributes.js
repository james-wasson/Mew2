
import { getGlobalAttributes } from "../../MewAttribute.js";

// todo: throw error on (non-control) reactive attributes defined on children
function getElementAttributes(element, attributeAliases) {
    const parsed = [];

    attributeAliases.forEach(attr => {
        [...element.attributes].forEach(attrNode => {
            if (attr.localName.toLowerCase() == attrNode.name.toLowerCase()) {
                parsed.push(Object.freeze({
                    instance: new attr._mew.class(attrNode.value),
                    hash: element.dataset.mAttrBind,
                    _mew: attr._mew
                }));
                element.removeAttribute(attrNode.name);
            }
        });
    });

    getGlobalAttributes().forEach(attr => {
        [...element.attributes].forEach(attrNode => {
            if (attr.localName.toLowerCase() == attrNode.name.toLowerCase()) {
                parsed.push(Object.freeze({
                    instance: new attr.class(attrNode.value),
                    _mew: attr
                }));
                element.removeAttribute(attrNode.name);
            }
        });
    });

    return Object.freeze(parsed);
}

export {
    getElementAttributes
};
