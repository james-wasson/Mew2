import { trueTypeIs } from "../helpers/type.js";

/**
 * Finds the parent mew node for this Node
 * It does so by checking is the _mew property is present
 * @param {Node} element ShadowRoot
 * @returns {Object|undefined} the parent _mew
 */
function findParentMew(element) {
    while (element.parentNode && (element = element.parentNode)) {
        if (element._mew !== undefined) {
            return element._mew;
        }
    }
}

/**
 * Takes an element and constructs the _mew instance
 * - Attaches a shadow dom if specified 
 * - Creates a mew handler class
 * - If shadow dom is specified appends the template
 * @param {Node} element
 */
function constructMewElement(element) {
    element._mew = {
        scope: "instance",
        type: "MewInstance",
        element: element,
        _static: element.constructor._mew,
        _template: element.constructor._mew._template,
        _root: element.constructor._mew._root
    };
    element._mew._instance = new element._mew._static.class();
    element._mew._instance._mew = element._mew;

    if (element._mew._static.shadowed) {
        let dom = element.attachShadow({ mode: 'open' });
        dom._mew = element._mew;
        dom.appendChild(element._mew._template.fragment.cloneNode(true));
    }
}

/**
 * - Finds the mew parent for this element 
 * - Appends any static attrbutes specified
 * - If shadow dom is not specified appends the template
 * @param {Node} element 
 */
function connectMewElement(element) {
    if (!element._mew._static.shadowed) {
        element.appendChild(element._mew._template.fragment.cloneNode(true));
    }
    element._mew._parent = findParentMew(element);
    element._mew._root.attributeNodes.forEach(attr =>
        element.setAttributeNode(attr.cloneNode(true)));
}

export {
    constructMewElement,
    connectMewElement
};

// todo:
/*
{
    HTMLOListElement: {
    class: 'HTMLOListElement',
    extends: 'ol',
    name: 'OL'
    },
    HTMLObjectElement: {
    class: 'HTMLObjectElement',
    extends: 'object',
    name: 'Object'
    },
    HTMLOptGroupElement: {
    class: 'HTMLOptGroupElement',
    extends: 'optgroup',
    name: 'OptGroup'
    },
    HTMLOptionElement: {
    class: 'HTMLOptionElement',
    extends: 'option',
    name: 'Option'
    },
    HTMLOutputElement: {
    class: 'HTMLOutputElement',
    extends: 'output',
    name: 'Output'
    },
    HTMLParagraphElement: {
    class: 'HTMLParagraphElement',
    extends: 'p',
    name: 'P'
    },
    HTMLParamElement: {
    class: 'HTMLParamElement',
    extends: 'param',
    name: 'Param'
    },
    HTMLPictureElement: {
    class: 'HTMLPictureElement',
    extends: 'picture',
    name: 'Picture'
    },
    HTMLPreElement: {
    class: 'HTMLPreElement',
    extends: 'pre',
    name: 'Pre'
    },
    HTMLProgressElement: {
    class: 'HTMLProgressElement',
    extends: 'progress',
    name: 'Progress'
    },
    HTMLBlockQuoteElement: {
    class: 'HTMLQuoteElement',
    extends: 'blockquote',
    name: 'BlockQuote'
    },
    HTMLQuoteElement: {
    class: 'HTMLQuoteElement',
    extends: 'q',
    name: 'Quote'
    },
    HTMLSelectElement: {
    class: 'HTMLSelectElement',
    extends: 'select',
    name: 'Select'
    },
    HTMLSourceElement: {
    class: 'HTMLSourceElement',
    extends: 'source',
    name: 'Source'
    },
    HTMLSpanElement: {
    class: 'HTMLSpanElement',
    extends: 'span',
    name: 'Span'
    },
    HTMLStyleElement: {
    class: 'HTMLStyleElement',
    extends: 'style',
    name: 'Style'
    },
    HTMLTableCaptionElement: {
    class: 'HTMLTableCaptionElement',
    extends: 'caption',
    name: 'Caption'
    },
    HTMLTHElement: {
    class: 'HTMLTableCellElement',
    extends: 'th',
    name: 'TH'
    },
    HTMLTDElement: {
    class: 'HTMLTableCellElement',
    extends: 'td',
    name: 'TD'
    },
    HTMLColElement: {
    class: 'HTMLTableColElement',
    extends: 'col',
    name: 'Col'
    },
    HTMLColGroupElement: {
    class: 'HTMLTableColElement',
    extends: 'colgroup',
    name: 'ColGroup'
    },
    HTMLTableElement: {
    class: 'HTMLTableElement',
    extends: 'table',
    name: 'Table'
    },
    HTMLTableRowElement: {
    class: 'HTMLTableRowElement',
    extends: 'tr',
    name: 'TR'
    },
    HTMLTHeadElement: {
    class: 'HTMLTableSectionElement',
    extends: 'thead',
    name: 'THead'
    },
    HTMLTBodyElement: {
    class: 'HTMLTableSectionElement',
    extends: 'tbody',
    name: 'TBody'
    },
    HTMLTFootElement: {
    class: 'HTMLTableSectionElement',
    extends: 'tfoot',
    name: 'TFoot'
    },
    HTMLTemplateElement: {
    class: 'HTMLTemplateElement',
    extends: 'template',
    name: 'Template'
    },
    HTMLTextAreaElement: {
    class: 'HTMLTextAreaElement',
    extends: 'textarea',
    name: 'TextArea'
    },
    HTMLTimeElement: {
    class: 'HTMLTimeElement',
    extends: 'time',
    name: 'Time'
    },
    HTMLTitleElement: {
    class: 'HTMLTitleElement',
    extends: 'title',
    name: 'Title'
    },
    HTMLTrackElement: {
    class: 'HTMLTrackElement',
    extends: 'track',
    name: 'Track'
    },
    HTMLUListElement: {
    class: 'HTMLUListElement',
    extends: 'ul',
    name: 'UL'
    },
    HTMLVideoElement: {
    class: 'HTMLVideoElement',
    extends: 'video',
    name: 'Video'
    },
};
*/
