import { constructMewElement, connectMewElement } from "./shared.js";

class MewElement extends HTMLElement {
  constructor(options) {
    super();
    constructMewElement(this);
  }
  connectedCallback() {
    connectMewElement(this);
  }
}

export {
  MewElement
}
