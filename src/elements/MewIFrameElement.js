import { constructMewElement, connectMewElement } from "./shared.js";

class MewIFrameElement extends HTMLIFrameElement {
  static extends = 'iframe';

  constructor(options) {
    super();
    constructMewElement(this);
  }
  connectedCallback() {
    connectMewElement(this);
  }
}

export {
  MewIFrameElement
}
