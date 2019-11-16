import { constructMewElement, connectMewElement } from "./shared.js";

class MewBaseElement extends HTMLBaseElement {
  static extends = 'base';

  constructor(options) {
    super();
    constructMewElement(this);
  }
  connectedCallback() {
    connectMewElement(this);
  }
}

export {
  MewBaseElement
}
