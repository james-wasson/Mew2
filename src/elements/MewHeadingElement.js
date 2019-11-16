import { constructMewElement, connectMewElement } from "./shared.js";

class MewHeadingElement extends HTMLHeadingElement {
    constructor(options) {
      super();
      constructMewElement(this);
    }
    connectedCallback() {
      connectMewElement(this);
    }
}

class MewH1Element extends MewHeadingElement {
  static extends = 'h1';
  
  constructor(options) {
    super(options);
  }
}

class MewH2Element extends MewHeadingElement {
  static extends = 'h2';
  
  constructor(options) {
    super(options);
  }
}

class MewH3Element extends MewHeadingElement {
  static extends = 'h3';
  
  constructor(options) {
    super(options);
  }
}

class MewH4Element extends MewHeadingElement {
  static extends = 'h4';
  
  constructor(options) {
    super(options);
  }
}

class MewH5Element extends MewHeadingElement {
  static extends = 'h5';
  
  constructor(options) {
    super(options);
  }
}

class MewH6Element extends MewHeadingElement {
  static extends = 'h6';
  
  constructor(options) {
    super(options);
  }
}

export {
  MewHeadingElement,
  MewH1Element,
  MewH2Element,
  MewH3Element,
  MewH4Element,
  MewH5Element,
  MewH6Element
}
