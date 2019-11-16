import { constructMewElement, connectMewElement } from "./shared.js";

class MewHeadElement extends HTMLHeadElement {
  static extends = 'head';

  constructor(options) {
    super();
    constructMewElement(this);
  }
  connectedCallback() {
    connectMewElement(this);
  }
}

export {
  MewHeadElement
}
