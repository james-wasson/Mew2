import { constructMewElement, connectMewElement } from "./shared.js";

class MewLinkElement extends HTMLLinkElement {
  static extends = 'link';

  constructor(options) {
    super();
    constructMewElement(this);
  }
  connectedCallback() {
    connectMewElement(this);
  }
}

export {
  MewLinkElement
}
