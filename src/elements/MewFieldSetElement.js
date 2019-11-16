import { constructMewElement, connectMewElement } from "./shared.js";

class MewFieldSetElement extends HTMLFieldSetElement {
  static extends = 'fieldset';

  constructor(options) {
    super();
    constructMewElement(this);
  }
  connectedCallback() {
    connectMewElement(this);
  }
}

export {
  MewFieldSetElement
}
