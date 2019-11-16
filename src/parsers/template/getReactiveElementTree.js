import { getGlobalAttributes } from "../../MewAttribute.js";
import { getLevelCount, getParentOffset } from "../../helpers/html.js";
import { hashCode } from "../../helpers/crypto.js";

function getReactiveElementTree(fragment, attributeAliases) {
    const getReactiveElementHash = (elementData) => {
        if (elementData.element.dataset.mStaticBind === undefined) {
            elementData.element.dataset.mStaticBind = hashCode(
                (elementData.parentOffset * 191) + 
                fragment._mew.class.name + 
                (elementData.levelCount * 137));
        }
        return elementData.element.dataset.mStaticBind;
    }

    const selector = attributeAliases.map(attr => attr.localName)
        .concat(getGlobalAttributes().map(attr => attr.localName))
        .map(attrName =>'[' + attrName + ']')
        .join(',');
    let elementsDataByLevel = [...fragment.querySelectorAll(selector)].map(el => {
        return {
            hash: getReactiveElementHash(el),
            parentOffset: getParentOffset(el),
            element: el,
            levelCount: getLevelCount(el)
        };
    }).reduce((buckets, elData) => {
        if (buckets[elData.levelCount] === undefined)
            buckets[elData.levelCount] = [];
        buckets[elData.levelCount].push(elData);
        return buckets;
    }, {});

    let elementsData = [];

    const findParent = (levelCount, elData) => {
        if (levelCount == 0) 
            return null;
        let el = elData.element.parentElement;
        while (el) {
            let idx = elementsData.map(p => p.element).indexOf(el);
            if (idx > -1) {
                return elementsData[idx];
            }
            el = el.parentElement;
        }
        return null;
    }
    
    for (let levelCount = 0; elements[levelCount] !== undefined; levelCount += 1) {
        elementsDataByLevel[levelCount].forEach(elData => {
            elData._parent = findParent(levelCount, elData);
        });
        elementsData = elementsData.concat(elementsDataByLevel[levelCount]);
    }
    elementsData.forEach(elData => Object.freeze(elData));

    return Object.freeze(elementsData);
}

export {
    getReactiveElementTree
}
