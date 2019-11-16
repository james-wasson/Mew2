import { constructMewElement, connectMewElement } from "./shared.js";

class MewBRElement extends HTMLBRElement {
  static extends = 'br';

  constructor(options) {
    super();
    constructMewElement(this);
  }
  connectedCallback() {
    connectMewElement(this);
  }
}

export {
  MewBRElement
}
