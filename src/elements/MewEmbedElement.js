import { constructMewElement, connectMewElement } from "./shared.js";

class MewEmbedElement extends HTMLEmbedElement {
  static extends = 'embed';

  constructor(options) {
    super();
    constructMewElement(this);
  }
  connectedCallback() {
    connectMewElement(this);
  }
}

export {
  MewEmbedElement
}
