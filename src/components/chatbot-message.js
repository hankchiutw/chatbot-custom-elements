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
        }

        .container {
          color: var(--message-color);
          background-color: var(--message-bg-color);
          padding: 8px 14px;
          border-radius: 34px;
          display: inline;
        }

        :host([right]) {
          text-align: right;
        }

        :host([right]) .container {
          color: var(--message-color-right);
          background-color: var(--message-bg-color-right);
        }

       </style>
       <div class='container'>
       message: ${new Date()}
       </div>
      `;
  }
});
