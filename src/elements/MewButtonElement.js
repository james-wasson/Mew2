import { constructMewElement, connectMewElement } from "./shared.js";

class MewButtonElement extends HTMLButtonElement {
  static extends = 'button';

  constructor(options) {
    super();
    constructMewElement(this);
  }
  connectedCallback() {
    connectMewElement(this);
  }
}

export {
  MewButtonElement
}
