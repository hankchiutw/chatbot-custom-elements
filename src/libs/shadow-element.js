"use strict";

import {render} from 'lit-html';

export default class ShadowElement extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({mode: 'open'});
    render(this.render(), this._shadowRoot);
  }

  render() {}
}

