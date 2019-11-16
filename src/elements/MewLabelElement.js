import { constructMewElement, connectMewElement } from "./shared.js";

class MewLabelElement extends HTMLLabelElement {
  static extends = 'label';

  constructor(options) {
    super();
    constructMewElement(this);
  }
  connectedCallback() {
    connectMewElement(this);
  }
}

export {
  MewLabelElement
}
