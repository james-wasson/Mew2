import { constructMewElement, connectMewElement } from "./shared.js";

class MewDialogElement extends HTMLDialogElement {
  static extends = 'dialog';

  constructor(options) {
    super();
    constructMewElement(this);
  }
  connectedCallback() {
    connectMewElement(this);
  }
}

export {
  MewDialogElement
}
