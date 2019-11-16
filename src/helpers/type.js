
/**
 * Checks if this constructor inherits from another
 * @param {ObjectConstructor} obj 
 * @param {ObjectConstructor} proto
 * @returns {Boolean} obj inherits proto
 */
function hasConstructor(obj, proto) {
    if (trueTypeIs(obj, 'function') && trueTypeIs(proto, 'function')) {
        do {
            if (Object.is(obj, proto))
                return true;
            obj = obj.__proto__;
        } while(obj)
    }
    return false;
}

/**
 * Calls toString on the object
 * and retrives it's true type
 * @param {Object} obj
 * @returns {String} true type
 */
function trueTypeOf(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

/**
 * Gets the objects true type
 * Then compares it against the args array
 * @param {Object} obj 
 * @param  {...Object|String} args 
 * If object then checks type against key
 *    If the object value is a function it is called with the Type being checked
 * @returns {Boolean} if true type is on of the ones passed in
 */
function trueTypeIs(obj, ...args) {
    let objType = trueTypeOf(obj);
    for (let arg of args) {
        if (typeof arg === 'object') {
            for (let type in arg) {
                if (objType === type) {
                    if (typeof arg[type] === 'function') {
                        arg[type].call(null, type);
                    }
                    return true;
                }
            }
        } else if (typeof arg === 'string') {
            if (objType === arg) {
                return true;
            }
        }
    }
    return false;
}

export {
    trueTypeIs,
    trueTypeOf,
    hasConstructor
}
