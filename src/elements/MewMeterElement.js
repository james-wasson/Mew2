import { constructMewElement, connectMewElement } from "./shared.js";

class MewMeterElement extends HTMLMeterElement {
  static extends = 'meter';

  constructor(options) {
    super();
    constructMewElement(this);
  }
  connectedCallback() {
    connectMewElement(this);
  }
}

export {
  MewMeterElement
}
