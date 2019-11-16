import { constructMewElement, connectMewElement } from "./shared.js";

class MewAudioElement extends HTMLAudioElement {
  static extends = 'audio';

  constructor(options) {
    super();
    constructMewElement(this);
  }
  connectedCallback() {
    connectMewElement(this);
  }
}

export {
  MewAudioElement
}
