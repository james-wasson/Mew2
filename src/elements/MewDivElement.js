import { constructMewElement, connectMewElement } from "./shared.js";

class MewDivElement extends HTMLDivElement {
    static extends = 'div';

    constructor(options) {
      super();
      constructMewElement(this);
    }
    connectedCallback() {
      connectMewElement(this);
    }
}

export {
  MewDivElement
}