import { constructMewElement, connectMewElement } from "./shared.js";

class MewImageElement extends HTMLImageElement {
  static extends = 'img';

  constructor(options) {
    super();
    constructMewElement(this);
  }
  connectedCallback() {
    connectMewElement(this);
  }
}

export {
  MewImageElement
}
