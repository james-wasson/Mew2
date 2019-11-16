import { constructMewElement, connectMewElement } from "./shared.js";

class MewCanvasElement extends HTMLCanvasElement {
  static extends = 'canvas';

  constructor(options) {
    super();
    constructMewElement(this);
  }
  connectedCallback() {
    connectMewElement(this);
  }
}

export {
  MewCanvasElement
}