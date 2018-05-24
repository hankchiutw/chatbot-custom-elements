"use strict";

import {html} from 'lit-html';
import ShadowElement from 'shadow-element';

window.customElements.define('chatbot-list', class extends ShadowElement {
  constructor() {
    super();
  }

  connectedCallback() {
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
          min-height: 300px;
          padding: 10px;
          border: solid 1px grey;
        }
       </style>
       <chatbot-message drawer-toggle></chatbot-message>
       <chatbot-message drawer-toggle right></chatbot-message>
      `;
  }
});
