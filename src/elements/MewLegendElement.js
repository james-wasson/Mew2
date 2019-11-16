import { constructMewElement, connectMewElement } from "./shared.js";

class MewLegendElement extends HTMLLegendElement {
  static extends = 'legend';

  constructor(options) {
    super();
    constructMewElement(this);
  }
  connectedCallback() {
    connectMewElement(this);
  }
}

export {
  MewLegendElement
}
