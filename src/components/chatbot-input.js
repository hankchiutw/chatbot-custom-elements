"use strict";

import {html} from 'lit-html';
import ShadowElement from 'shadow-element';

window.customElements.define('chatbot-input', class extends ShadowElement {
  constructor() {
    super();
  }

  connectedCallback() {
  }

  render() {
    return html`
      <style>
        :host {
          display: flex;
          height: var(--app-footer-height);
          padding: 10px;
          border: solid 1px grey;
          border-top: 0;
        }

        input {
          color: grey;
          padding: 3px 12px;
          border-radius: var(--app-footer-height);
          border: solid 1px lightgrey;
        }
       </style>
       <div></div>
       <input
        type='text'
        placeholder='Aa'
        />
       <div>
         <i class="fas fa-thumbs-up"></i>
       </div>
      `;
  }
});
