
import { MewError } from "../../MewError.js";
import { replaceByTagName } from "../../helpers/html.js";

// todo: throw error on (non-control) reactive attributes defined on children
function renameChildElements(template, children) {
    children.forEach(child => {
        let extendStr = child._mew._root.extends;
        let templateTagElements = template.querySelectorAll(`${child.localName}`);
        templateTagElements.forEach(element => {
            let options = extendStr === undefined ? {} : { is: extendStr };
            replaceByTagName(element, extendStr === undefined ? child._mew.name : extendStr, options);
        });
        let templateIsElements = template.querySelectorAll(`[is="${child.localName}"]`);
        templateIsElements.forEach(element => {
            if (extendStr === undefined) {
                throw new MewError(`<${element.tagName.toLowerCase()} is="${child.localName}" ... > defined on non-existant tag type.`);
            }
            if (element.tagName.toLowerCase() === extendStr) {
                replaceByTagName(element, extendStr, { is: child._mew.name });
            } else {
                throw new MewError(`<${element.tagName.toLowerCase()} is="${child.localName}" ... > defined on incorrect tag type.`);
            }
        });
    });
}

export {
    renameChildElements
};
