import { constructMewElement, connectMewElement } from "./shared.js";

class MewMapElement extends HTMLMapElement {
  static extends = 'map';

  constructor(options) {
    super();
    constructMewElement(this);
  }
  connectedCallback() {
    connectMewElement(this);
  }
}

export {
  MewMapElement
}
