"use strict";

import {html} from 'lit-html';
import ShadowElement from 'shadow-element';

window.customElements.define('chatbot-message', class extends ShadowElement {
  constructor() {
    super();

    console.log('chatbot-message: right:', this.getAttribute('right') );
  }

  connectedCallback() {
  }

  render() {
    return html`
      <style>
        :host {
          margin: 4px;
          padding: 6px;
          display: block;
          border: solid 1px blue;
        }

        :host([right]) {
          text-align: right;
        }
       </style>
       <div>
       message: ${new Date()}
       </div>
      `;
  }
});
