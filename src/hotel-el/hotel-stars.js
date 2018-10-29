import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat';

class HotelStars extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: inline-block;
          margin: 0;
          float: left;
        }
        .clearfix {
          content: "";
          clear: both;
          display: table;
        }
        img {
          display: inline-block;
          /*width: 4%;*/
          width: 2.5vw;
          height: auto;
          float: left;
        }
        img:nth-of-type(n+2) {
          /*margin-left: -1vw;*/
        }
      </style>
      <div class="clearfix">
        <template is="dom-repeat" items="[[starsEl]]">
          <img src="../../images/hstar.png" alt="star">
        </template>
      </div>
    `;
  }
  static get properties() {
    return {
      stars: {
        type: Number,
        observer: '_starsCountChanged'
      },
      starsEl: {
        type: Array,
        value() {}
      }
    };
  }

  _starsCountChanged() {
    const arr = [];
    for(let i = 0; i < this.stars; i++) {
      arr.push(1);
    }
    this.set('starsEl', arr);
  }

  constructor() {
    super();
  }
}

customElements.define('hotel-stars', HotelStars);