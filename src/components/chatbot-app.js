"use strict";

import {html} from 'lit-html';
import ShadowElement from 'shadow-element';

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
        
        app-header-layout {
          border: solid 1px grey;
          border-bottom: 0;
        }

        .column-layout {
          height: 100%;
          flex-direction: column;
          display: flex;
        }

        chatbot-list {
          flex: 1;
        }
      </style>
      <app-drawer-layout>
        <app-drawer slot='drawer' swipe-open>
          <div>About me</div>
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
