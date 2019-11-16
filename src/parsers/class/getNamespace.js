
import { MewError } from "../../MewError.js";
import { trueTypeIs } from "../../helpers/type.js"

function createNamespaceChunk(chunk, minSize, maxSize) {
    chunk = String(chunk)
    minSize = minSize < 1 ? 1 : minSize;
    if (chunk.length > maxSize || chunk.length < minSize) {
        throw new MewError(
            `Namespace chunk size must be between ${minSize}and ${maxSize}
            Chunk: "${namespace}"`);
    }
    return chunk;
}

function createNamespaceArray(namespace, minSize, maxSize) {
    let array = [];
    if (Array.isArray(namespace)) {
        array = namespace;
    } else if (namespace !== undefined && namespace.length > 0) {
        let splitter = null;
        if (namespace.includes('.'))
            splitter = '.';
        else if (namespace.includes('/'))
            splitter = '/';

        if (splitter == null) {
            array = [namespace];
        } else {
            array = namespace.split(splitter)
                .map(p => p.trim())
                .filter(p => p.length > 0);
        }
    }
    array = array.map(chunk => createNamespaceChunk(chunk, minSize, maxSize));
    return Object.freeze(array);
}

/**
 * Parses the mew class namespace into the _mew object as an array
 * @param {undefined|Function|Array<String>|String} namespace
 * @returns {Array<String>} namespace
 */
function getNamespace(namespace, minSize, maxSize) {
    let namespaceIsGood = trueTypeIs(namespace, {
        'undefined': () => namespace = undefined,
        'array': () => namespace = namespace,
        'string': () => namespace = String(namespace)
    });
    if (!namespaceIsGood) {
        throw new MewError("Mew must have a namespace defined as a function, string, or array.");
    }
    return createNamespaceArray(namespace, minSize, maxSize);
}

export {
    getNamespace
};
