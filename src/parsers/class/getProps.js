
import { MewError } from "../../MewError.js";
import { trueTypeIs } from "../../helpers/type.js"

function createPropsArray(props) {
    let propDefs = [];
    for (let prop of props) {
        if (trueTypeIs(prop, 'string')) {
            prop = { name: prop };
        }
        if (trueTypeIs(prop, 'object')) {
            let rv = {};
            if (!trueTypeIs(prop.name, 'string')) {
                throw new MewError('Prop object must have a name')
            }
            prop.name = prop.name.trim();
            if (prop.name.length <= 0) {
                throw new MewError('Empty Prop name detected')
            }
            rv.name = prop.name;

            if (!trueTypeIs(prop.inherit, 'undefined', 'boolean')) {
                throw new MewError('Prop object must have a boolean inherit property')
            }
            rv.inherit = !!prop.inherit;

            if (!trueTypeIs(prop.required, 'undefined', 'boolean')) {
                throw new MewError('Prop object must have a boolean required property')
            }
            rv.required = !!prop.required;

            propDefs.push(Object.freeze(rv));
        } else {
            throw new MewError('Props must either be string or object')
        }
    }
    return Object.freeze(propDefs);
}

/**
 * Creates the props array
 * @param {undefined|Array} props
 * @returns {Array} props
 */
function getProps(props) {
    let propsIsGood = trueTypeIs(props, {
        'undefined': () => props = [],
        'array': () => props = props
    });
    if (!propsIsGood) {
        throw new MewError("Mew must have props defined as an array.");
    }
    return createPropsArray(props);
}

export {
    getProps
};
