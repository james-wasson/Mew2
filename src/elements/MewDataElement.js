import { constructMewElement, connectMewElement } from "./shared.js";

class MewDataElement extends HTMLDataElement {
  static extends = 'data';

  constructor(options) {
    super();
    constructMewElement(this);
  }
  connectedCallback() {
    connectMewElement(this);
  }
}

export { 
  MewDataElement
}
