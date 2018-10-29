import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../hotel-el/hotel-el';
import '@polymer/polymer/lib/elements/dom-repeat';
import '@polymer/iron-ajax/iron-ajax';

/**
 * @customElement
 * @polymer
 */
class PolymerApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <iron-ajax
        auto
        url="http://137.116.129.201/api/hotels"
        handle-as="json"
        on-response="handleResponse"
      >
      
      </iron-ajax>
      <template is="dom-repeat" items="[[hotels]]" as="hotel">
        <hotel-el properties="[[hotel]]" hotel-id="[[hotel.id]]"></hotel-el>
      </template>
    `;
  }
  static get properties() {
    return {
      hotels: {
        type: Array,
      }
    };
  }

  handleResponse(event, res) {
    this.hotels = res.response;
  }

  constructor(){
    super();
  }
}

window.customElements.define('polymer-app', PolymerApp);
