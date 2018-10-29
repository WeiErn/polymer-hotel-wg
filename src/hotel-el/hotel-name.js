import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class HotelName extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          font-size: 3.5vw;
        }
      </style>
      <div>
        [[name]]
      </div>
    `;
  }
  static get properties() {
    return {
      name: {
        type: String,
      }
    };
  }
}

customElements.define('hotel-name', HotelName);