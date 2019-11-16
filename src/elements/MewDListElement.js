import { constructMewElement, connectMewElement } from "./shared.js";

class MewDListElement extends HTMLDListElement {
  static extends = 'dl';

  constructor(options) {
    super();
    constructMewElement(this);
  }
  connectedCallback() {
    connectMewElement(this);
  }
}

export {
  MewDListElement
}
