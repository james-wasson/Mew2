import { constructMewElement, connectMewElement } from "./shared.js";

class MewFormElement extends HTMLFormElement {
  static extends = 'form';

  constructor(options) {
    super();
    constructMewElement(this);
  }
  connectedCallback() {
    connectMewElement(this);
  }
}

export {
  MewFormElement
}
