
const ALL_HTML_ATTRIBUTES = Object.freeze(new Set(["accept", "accept-charset", "accesskey", "action", "align", "alt", "async", "autocomplete",
    "autofocus", "autoplay", "bgcolor", "border", "charset", "checked", "cite", "class", "color",
    "cols", "colspan", "content", "contenteditable", "controls", "coords", "data", "data-*", "datetime",
    "default", "defer", "dir", "dirname", "disabled", "download", "draggable", "dropzone", "enctype", "for",
    "form", "formaction", "headers", "height", "hidden", "high", "href", "hreflang", "http-equiv", "id",
    "ismap", "kind", "label", "lang", "list", "loop", "low", "max", "maxlength", "media", "method", "min",
    "multiple", "muted", "name", "novalidate", "onabort", "onafterprint", "onbeforeprint", "onbeforeunload",
    "onblur", "oncanplay", "oncanplaythrough", "onchange", "onclick", "oncontextmenu", "oncopy", "oncuechange",
    "oncut", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart",
    "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onhashchange", "oninput",
    "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata",
    "onloadstart", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel",
    "onoffline", "ononline", "onpagehide", "onpageshow", "onpaste", "onpause", "onplay", "onplaying", "onpopstate",
    "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onsearch", "onseeked", "onseeking",
    "onselect", "onstalled", "onstorage", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onunload",
    "onvolumechange", "onwaiting", "onwheel", "open", "optimum", "pattern", "placeholder", "poster", "preload",
    "readonly", "rel", "required", "reversed", "rows", "rowspan", "sandbox", "scope", "selected", "shape", "size",
    "sizes", "span", "spellcheck", "src", "srcdoc", "srclang", "srcset", "start", "step", "style", "tabindex",
    "target", "title", "translate", "type", "usemap", "value", "width", "wrap"]));

const HTML_TAG_NAMES = Object.freeze(new Set(["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont",
    "bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","cite","code","col",
    "colgroup","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","em","embed",
    "fieldset","figcaption","figure","font","footer","form","frame","frameset","h1 to <h6>","head",
    "header","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main",
    "map","mark","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output",
    "p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select",
    "small","source","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td",
    "template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr"]));


/**
 * Takes a HTML element and creates a new one
 * With the specified name and options
 * This method then clones all attributes and moves the children
 * @param {HTMLElement} original 
 * @param {String} name 
 * @param {Object} options
 * @returns {HTMLElement} new element
 */
function replaceByTagName(original, name, options) {
    var replacement = document.createElement(name, options || {});
    // Pass attributes
    [...original.attributes].map(attr => attr.cloneNode(true))
        .forEach(attr => replacement.setAttributeNode(attr));
    // Pass children
    [...original.children].forEach(child => replacement.appendChild(child));
    // Switch
    original.parentNode.replaceChild(replacement, original);
    return replacement;
}

/**
 * Check if the string is any HTML attribute
 * @param {String} string 
 * @returns {Boolean} true if it is a HTML attribute
 */
function isHTMLAttribute(string) {
    return ALL_HTML_ATTRIBUTES.has(string);
}

/**
 * Check if the string is any HTML tag name
 * @param {String} string 
 * @returns {Boolean} true if it is a HTML tag name
 */
function isHTMLTag(string) {
    return HTML_TAG_NAMES.has(string);
}

/**
 * Gets the parent count of the element
 * @param {HTMLElement} element 
 */
function getLevelCount(element) {
    let level = 0;
    while (element.parentElement != null) {
        element = element.parentElement;
        level += 1;
    }
    return level;
}

/**
 * Gets the parent count of the element
 * @param {HTMLElement} element 
 */
function getParentOffset(element) {
    if (element.parentElement == null)
        return 0;
    return [...element.parentElement.children].indexOf(element);
}

export {
    replaceByTagName,
    isHTMLAttribute,
    isHTMLTag,
    getLevelCount,
    getParentOffset
}
