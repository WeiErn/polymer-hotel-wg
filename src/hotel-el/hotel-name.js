import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class HotelName extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          /*font-size: 3.5vw;*/
        }
      </style>
      <div style$="font-size: [[fontSize]];">
        [[name]]
      </div>
    `;
  }
  static get properties() {
    return {
      name: {
        type: String,
      },
      fontSize: {
        type: String,
        computed: '_computedFontSize(name)'
      }
    };
  }

  _computedFontSize(name) {
    if (name.length > 44) {
      return '2.75vw';
    }
    return '3.5vw';
  }
}

customElements.define('hotel-name', HotelName);