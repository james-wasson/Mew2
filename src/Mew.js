
import "./attributes/index.js";

import { MewElement } from "./elements/MewElement.js";
import { MewError } from "./MewError.js";
import { trueTypeIs, hasConstructor } from "./helpers/type.js"
import { parseClass } from "./parsers/parseClass.js";

const definedStore = {};

class Mew {
    static element = MewElement;
    constructor() {
    }
}

function DefineMew(mewClass) {
    if (!hasConstructor(mewClass, Mew)) {
        throw new MewError("Mew must extend Mew Class.");
    }
    if (parseClass(mewClass)) {
        let _mew = mewClass._mew;
        if (definedStore[_mew.name]) {
            throw new MewError(`A Mew with this name has already been defined: "${_mew.name}"`);
        } else {
            definedStore[_mew.name] = _mew;
        }
        let options = {};
        if (trueTypeIs(_mew._root.extends, 'string')) {
            options.extends = _mew._root.extends;
        }
        customElements.define(_mew.name, class extends _mew._root.element {
            static _mew = _mew;
        }, options);
        console.log(_mew);
    }
    return mewClass;
}

export {
    DefineMew,
    Mew
}
