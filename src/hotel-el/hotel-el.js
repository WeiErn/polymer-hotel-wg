import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './hotel-name';
import './hotel-stars';
import './hotel-district';
import './hotel-distance';
import './hotel-review';
import './hotel-price';

class HotelEl extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          border: 0.5px solid #cdcdcd;
          padding: 0.5vw;
        }
        .clearfix::after {
          content: "";
          clear: both;
          display: table;
        }
        .img-wrapper {
          float: left;
          width: 25%;
          height: auto;
          
          padding-bottom: 25%;
          position: relative;
        }
        img {
          position: absolute;
          top: 0; bottom: 0; left: 0; right: 0;
          width: 100%;
        }
        .info {
          display: inline-block;
          padding: 2.5vw 2vw 0;
          width: 75%;
          box-sizing: border-box;
          height: 100%;
          font-family: sans-serif;
        }
        .lower {
          padding-top: 2vw;
          box-sizing: border-box;
        }
        .upper .row:nth-of-type(2) {
          padding: 0.6vw 0 0.6vw 0;
        }
      </style>
      <div class="clearfix">
        <div class="img-wrapper">
          <img src="[[properties.image]]" alt="Hotel Room" onError="this.onerror=null;this.src='../../images/wego.jpg';" />
        </div>
        <div class="info">
          <div class="upper">
            <div class="row">
              <hotel-name name="[[properties.name]]"></hotel-name>
            </div>
            <div class="row clearfix">
              <hotel-stars stars="[[properties.stars]]"></hotel-stars>
              <hotel-district district="[[properties.district]]"></hotel-district>
            </div>
            <div class="row">
              <hotel-distance distance="[[properties.distanceToCityCentre]]"></hotel-distance>
            </div>
          </div>
          <div class="lower">
            <hotel-review score="[[properties.review.score]]" reviews-count="[[properties.review.reviewsCount]]"></hotel-review>
            <hotel-price price="[[properties.amount]]"></hotel-price>
          </div>           
        </div>
      </div>
    `;
  }
  static get properties() {
    return {
      properties: {
        type: Array,
      },
      hotelId: {
        type: Number,
      }
    };
  }
}

customElements.define('hotel-el', HotelEl);