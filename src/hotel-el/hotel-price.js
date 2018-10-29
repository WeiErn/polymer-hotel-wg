import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class HotelPrice extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: inline;
          float: right;
          color: #7cb342;
          width: 20%;
          margin-top: 1.3vw;
        }
        .clearfix::after {
          content: "";
          clear: both;
          display: table;
        }
        #currency {
          font-size: 3.2vw;
          float: left;
        }
        #price {
          float: left;
          font-size: 4vw;
          font-weight: 600;
          letter-spacing: 0.1vw;
          margin-left: 0.4vw;
          margin-top: 0.2vw;
        }
      </style>
      <div class="clearfix">
        <span id="currency">S$</span><span id="price">[[price]]</span>
      </div>
    `;
  }
  static get properties() {
    return {
      price: {
        type: Number,
      },
    };
  }
}

customElements.define('hotel-price', HotelPrice);