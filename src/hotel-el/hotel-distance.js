import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class HotelDistance extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          font-size: 2vw;
          color: #a9a4a4;
        }
      </style>
      [[distanceRounded]] km to city centre
    `;
  }
  static get properties() {
    return {
      distance: {
        type: String,
      },
      distanceRounded: {
        type: String,
        computed: '_roundOffDistance(distance)'
      }
    };
  }

  _roundOffDistance(distance) {
    let distanceStr = parseFloat(distance).toFixed(2).toString();
    if (distanceStr.slice(-1) === '0') {
      return distanceStr.slice(0,-1);
    }
    return distanceStr;
  }
}

customElements.define('hotel-distance', HotelDistance);