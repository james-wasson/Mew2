import { constructMewElement, connectMewElement } from "./shared.js";

class MewLIElement extends HTMLLIElement {
  static extends = 'li';

  constructor(options) {
    super();
    constructMewElement(this);
  }
  connectedCallback() {
    connectMewElement(this);
  }
}

export {
  MewLIElement
}
