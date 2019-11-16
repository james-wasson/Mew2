import { constructMewElement, connectMewElement } from "./shared.js";

class MewAreaElement extends HTMLAreaElement {
  static extends = 'area';

  constructor(options) {
    super();
    constructMewElement(this);
  }
  connectedCallback() {
    connectMewElement(this);
  }
}

export {
  MewAreaElement
}
