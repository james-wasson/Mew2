
/**
 * Turns a camel case string into a kebab case string
 * @param {String} string 
 * @returns {String} kebab string
 */
function camelToKebab(string) {
    return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase().trim();
}

export {
    camelToKebab
}
