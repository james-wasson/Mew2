
import { renameChildElements } from "./template/renameChildElements.js";
import { getElementExtends } from "./template/getElementExtends.js";
import { getElementAttributes } from "./template/getElementAttributes.js";
import { getReactiveElementTree } from "./template/getReactiveElementTree.js";
import { MewError } from "../MewError.js";
import { trueTypeIs, hasConstructor } from "/src/helpers/type.js";

/**
 * Calls all relevant static Mew Template class parsers
 * These only insert themseleves in the _mew object
 * No other changes are made
 * @param {Object} _mew 
 * @returns {Boolean} false if the object is already present
 */
function parseTemplate(_mew) {
    let stringFragment;
    let templateIsGood = trueTypeIs(_mew.class.template, {
        'undefined': () => stringFragment = "",
        'string': () => stringFragment = _mew.class.template
    });
    if (!templateIsGood) {
        throw new MewError("Mew must have template defined as a string.");
    }

    let fragment = document.createRange().createContextualFragment(stringFragment);
    let _root = {
        type: "MewTemplateRoot",
        scope: "static",
        _mew: _mew,
    };
    let _template = {
        fragment: fragment,
        type: "MewTemplate",
        scope: "static",
        _mew: _mew,
        _root: _root
    };
    _root._template = _template;

    let elementIsGood = hasConstructor(_mew.class.element, HTMLElement);
    if (!elementIsGood) {
        throw new MewError("Mew must have element defined as a HTMLElement constructor.");
    }
    _root.element = _mew.class.element;
    _root.extends = getElementExtends(_root.element);

    if ([...fragment.children].some(p => p.tagName.toLowerCase() === 'root')) {
        if (fragment.children.length > 1) {
            throw new MewError('Mew template must have "root" as the only direct child.');
        }
        let rootEl = fragment.children[0];

        _root.attributes = getElementAttributes(rootEl, _mew.attributes);

        _root.attributeNodes = Object.freeze([...rootEl.attributes].map(p => p.cloneNode(true)));
        // move rool el children and remove
        [...rootEl.children].forEach(child => fragment.appendChild(child));
        fragment.removeChild(rootEl);
    } else {
        _root.attributes = Object.freeze([]);
        _root.attributeNodes = Object.freeze([]);
    }

    renameChildElements(fragment, _mew.children);

    _template.attributeNodes = getReactiveElementTree(fragment, _mew.attributes);

    Object.freeze(_template);
    Object.freeze(_root);
    Object.freeze(fragment);
    _mew._template = _template;
    _mew._root = _root;
}

export {
    parseTemplate
}
