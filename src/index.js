"use strict";

const supportsCustomElementsV1 = 'customElements' in window;

// Lazy load the polyfill if necessary.
if (!supportsCustomElementsV1) {
  import(/* webpackChunkName: "@webcomponents/custom-elements" */ '@webcomponents/custom-elements').then(e => {
    // Polyfill loaded.
    console.log('customElements v1 polyfill loaded:', e);
  });
} else {
  // Native support. Good to go.
}

import '@polymer/app-layout/app-layout';
import 'chatbot-app';
import 'chatbot-app.scss';
