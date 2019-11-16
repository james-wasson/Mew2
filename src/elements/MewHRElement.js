import { constructMewElement, connectMewElement } from "./shared.js";

class MewHRElement extends HTMLHRElement {
  static extends = 'hr';

  constructor(options) {
    super();
    constructMewElement(this);
  }
  connectedCallback() {
    connectMewElement(this);
  }
}

export {
  MewHRElement
}
