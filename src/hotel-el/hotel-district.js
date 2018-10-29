import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class HotelDistrict extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: inline-block;
          font-size: 2.3vw;
          line-height: 2.3vw;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #a9a4a4;
          margin: 0 0 0 0.7vw;
          vertical-align: top;
          float: left;
          /*vertical*/
        }
        p {
          margin: 0 0;
        }
      </style>
      <p>[[district]]</p>
    `;
  }
  static get properties() {
    return {
      district: {
        type: String,
      },
    };
  }
}

customElements.define('hotel-district', HotelDistrict);