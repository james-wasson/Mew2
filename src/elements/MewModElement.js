import { constructMewElement, connectMewElement } from "./shared.js";

class MewModElement extends HTMLModElement {
    constructor(options) {
      super();
      constructMewElement(this);
    }
    connectedCallback() {
      connectMewElement(this);
    }
}

class MewDelElement extends MewModElement {
  static extends = 'del';

  constructor(options) {
    super(options);
  }
}

class MewInsElement extends MewModElement {
  static extends = 'ins';

  constructor(options) {
    super(options);
  }
}

export {
  MewModElement,
  MewDelElement,
  MewInsElement
}
