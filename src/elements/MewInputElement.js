import { constructMewElement, connectMewElement } from "./shared.js";

class MewInputElement extends HTMLInputElement {
    static extends = 'input';

    constructor(options) {
      super();
      constructMewElement(this);
    }
    connectedCallback() {
      connectMewElement(this);
    }
}

class MewInputTextElement extends MewInputElement {
  static extends = 'input';

  constructor() {
    super();
    constructMewElement(this);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("type", "text");
  }
}

class MewInputButtonElement extends MewInputElement {
  constructor(options) {
    super(options);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("type", "button");
  }
}

class MewInputCheckboxElement extends MewInputElement {
  constructor(options) {
    super(options);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("type", "checkbox");
  }
}

class MewInputColorElement extends MewInputElement {
  constructor(options) {
    super(options);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("type", "color");
  }
}

class MewInputDateElement extends MewInputElement {
  constructor(options) {
    super(options);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("type", "date");
  }
}

class MewInputDateTimeLocalElement extends MewInputElement {
  constructor(options) {
    super(options);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("type", "datetime-local");
  }
}

class MewInputEmailElement extends MewInputElement {
  constructor(options) {
    super(options);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("type", "email");
  }
}

class MewInputFileElement extends MewInputElement {
  constructor(options) {
    super(options);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("type", "file");
  }
}

class MewInputHiddenElement extends MewInputElement {
  constructor(options) {
    super(options);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("type", "hidden");
  }
}

class MewInputImageElement extends MewInputElement {
  constructor(options) {
    super(options);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("type", "image");
  }
}

class MewInputMonthElement extends MewInputElement {
  constructor(options) {
    super(options);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("type", "month");
  }
}

class MewInputNumberElement extends MewInputElement {
  constructor(options) {
    super(options);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("type", "number");
  }
}

class MewInputPasswordElement extends MewInputElement {
  constructor(options) {
    super(options);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("type", "password");
  }
}

class MewInputRadioElement extends MewInputElement {
  constructor(options) {
    super(options);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("type", "radio");
  }
}

class MewInputRangeElement extends MewInputElement {
  constructor(options) {
    super(options);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("type", "range");
  }
}

class MewInputResetElement extends MewInputElement {
  constructor(options) {
    super(options);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("type", "reset");
  }
}

class MewInputSearchElement extends MewInputElement {
  constructor(options) {
    super(options);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("type", "search");
  }
}

class MewInputSubmitElement extends MewInputElement {
  constructor(options) {
    super(options);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("type", "submit");
  }
}

class MewInputTelElement extends MewInputElement {
  constructor(options) {
    super(options);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("type", "tel");
  }
}

class MewInputTimeElement extends MewInputElement {
  constructor(options) {
    super(options);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("type", "time");
  }
}

class MewInputUrlElement extends MewInputElement {
  constructor(options) {
    super(options);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("type", "url");
  }
}

class MewInputWeekElement extends MewInputElement {
  constructor(options) {
    super(options);
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("type", "week");
  }
}

export {
  MewInputElement,
  MewInputTextElement,
  MewInputButtonElement,
  MewInputCheckboxElement,
  MewInputColorElement,
  MewInputDateElement,
  MewInputDateTimeLocalElement,
  MewInputEmailElement,
  MewInputFileElement,
  MewInputHiddenElement,
  MewInputImageElement,
  MewInputMonthElement,
  MewInputNumberElement,
  MewInputPasswordElement,
  MewInputRadioElement,
  MewInputRangeElement,
  MewInputResetElement,
  MewInputSearchElement,
  MewInputSubmitElement,
  MewInputTelElement,
  MewInputTimeElement,
  MewInputUrlElement,
  MewInputWeekElement
}
