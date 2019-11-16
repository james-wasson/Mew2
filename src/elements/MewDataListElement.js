import { constructMewElement, connectMewElement } from "./shared.js";

class MewDataListElement extends HTMLDataListElement {
  static extends = 'datalist';

  constructor(options) {
    super();
    constructMewElement(this);
  }
  connectedCallback() {
    connectMewElement(this);
  }
}

export {
  MewDataListElement
}
