
import { MewDivElement } from "./elements/MewDivElement.js";
import { DefineMew, Mew } from "./Mew.js";

// Create a class for the element
class SomeData extends Mew {
    static element = MewDivElement;
    static shadowed = false;
    static namespace = 'data';
    constructor() {
        super();
    }
    static get template() {
        return `
        <root aaa="fff">
            <slot name="element-name">NEED NAME</slot>
            <p>aaa</p>
        </root>
        `;
    }
};

// Create a class for the element
class PopupInfo extends Mew {
    static element = MewDivElement;
    static shadowed = true;
    static children = [SomeData];
    constructor() {
        super();
    }
    static get template() {
        return `
        <root m-if="555">
            <div m-if="444"></div>
            <div is="some-data"></div>
        </root>
        `;
    }
};

DefineMew(PopupInfo);
