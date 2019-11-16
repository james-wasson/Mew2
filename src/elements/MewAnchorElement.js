import { constructMewElement, connectMewElement } from "./shared.js";

class MewAnchorElement extends HTMLAnchorElement {
  static extends = 'a';

  constructor(options) {
    super();
    constructMewElement(this);
  }
  connectedCallback() {
    connectMewElement(this);
  }
}

export {
  MewAnchorElement
}
