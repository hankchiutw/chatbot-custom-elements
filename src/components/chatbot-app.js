"use strict";

import {html, render} from 'lit-html';

class ShadowElement extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({mode: 'open'});
    render(this.render(), this._shadowRoot);
  }

  render() {}
}

window.customElements.define('chatbot-app', class extends ShadowElement {
  constructor() {
    super();
  }

  connectedCallback() {
  }

  render() {
    return html`
      <style>
        app-drawer-layout {
          height: 100%;
        }

        app-drawer {
          border: solid 1px grey;
        }

        .column-layout {
          height: 100%;
          flex-direction: column;
          display: flex;
        }
        app-header-layout {
          border: solid 1px grey;
        }

        chatbot-list {
          flex: 1;
        }

        chatbot-input {
        }
      </style>
      <app-drawer-layout>
        <app-drawer slot='drawer' swipe-open>
          <div>drawer</div>
        </app-drawer>
        <div class='column-layout'>
          <app-header-layout>
            <app-header slot="header">
              <app-toolbar>
                <div main-title>Chatbot</div>
              </app-toolbar>
            </app-header>
          </app-header-layout>
          <chatbot-list></chatbot-list>
          <chatbot-input></chatbot-input>
        </div>
      </app-drawer-layout>
		`;
  }
});

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
          display: block;
          height: var(--app-footer-height);
          padding: 10px;
          border: solid 1px grey;
        }
       </style>
       <input type='text' />
      `;
  }
});

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
