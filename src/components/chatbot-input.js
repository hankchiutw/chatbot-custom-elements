"use strict";

import {html} from 'lit-html';
import ShadowElement from 'shadow-element';
import sharedStyle from 'shared-style';

window.customElements.define('chatbot-input', class extends ShadowElement {
  constructor() {
    super();
  }

  connectedCallback() {
  }

  render() {
    return html`
      ${sharedStyle}
      <style>
        :host {
          display: flex;
          align-items: center;
          padding: 10px;
        }

        .input-container {
          flex: 1;
          padding: 8px 12px;
          margin: 0 10px;
          border-radius: var(--app-footer-height);
          border: solid 1px lightgrey;
        }

        input {
          border: none;
        }

        ::placeholder {
          color: lightgrey;
        }

      </style>
      <div></div>
      <div class='input-container'>
        <input
         type='text'
         placeholder='Type something...'
         />
      </div>
      <div>
        <i class="fas fa-thumbs-up"></i>
      </div>
      `;
  }
});
