import { MewError } from "./MewError.js";
import { hasConstructor } from "./helpers/type.js"
import { parseAttributeClass } from "./parsers/parseAttributeClass.js";

const definedStore = {};

class MewAttribute {
    static qualifier = "m";
}

function getGlobalAttributes() {
    return Object.values(definedStore).filter(p => p.global);
}

function DefineMewAttribute(mewAttributeClass) {
    if (!hasConstructor(mewAttributeClass, MewAttribute)) {
        throw new MewError("Mew Attribute must extend Mew Attribute Class.");
    }
    if (parseAttributeClass(mewAttributeClass)) {
        let _mew = mewAttributeClass._mew;
        if (definedStore[_mew.name]) {
            throw new MewError(`A Mew Attribute with this name has already been defined: "${_mew.name}"`);
        }
        if (mewAttributeClass._mew.global && getGlobalAttributes().some(p => p.localName == _mew.localName)) {
            throw new MewError(`A Mew Global Attribute with this name has already been defined: "${_mew.localName}"`);
        }
        definedStore[_mew.name] = _mew;
        console.log(_mew);
    }
    return mewAttributeClass;
}

export {
    DefineMewAttribute,
    MewAttribute,
    getGlobalAttributes,
}
