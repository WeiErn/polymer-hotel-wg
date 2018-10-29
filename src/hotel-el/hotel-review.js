import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class HotelReview extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: inline-block;
          font-size: 3vw;
          height: 100%;
          width: 80%;
        }
        #score-bubble {
          display: inline-block;
          background: url('../../images/reviewscore.png');
          background-repeat: no-repeat;
          width: 12%;
          height: 0;
          padding-bottom: 14%;
          background-size: 100%;
          position: relative;
          vertical-align: top;
        }
        #score {
          position: absolute;
          top: 50%;
          left: 50%;
          height: 50%;
          width: 50%;
          margin: -33% 0 0 -29%;
          color: #fff;
          font-size: 3.2vw;
        }
        #beside-score-bubble {
          display: inline-block;
        }
        #rating {
          font-size: 2.5vw;
          color: #a9a4a4;
        }
        #reviews-count {
          margin-top: 1.2vw;
          font-size: 2vw;
          color: #a9a4a4;
        }
      </style>
      <div id="score-bubble" style$="background-position: [[position]];">
        <span id="score">[[score]]</span>
      </div>
      <div id="beside-score-bubble">
        <div id="rating">[[rating]]</div>
        <div id="reviews-count">[[reviews]]</div>
      </div>
    `;
  }
  static get properties() {
    return {
      score: {
        type: Number,
      },
      reviewsCount: {
        type: Number
      },
      rating: {
        type: String,
        computed: '_computedRating(score)'
      },
      reviews: {
        type: String,
        computed: '_computedReviews(reviewsCount)'
      },
      position: {
        type: String,
        computed: '_computedPosition(rating)'
      }
    };
  }

  _computedPosition(rating) {
    let position;
    switch(rating) {
      case 'Poor':
        position = '0 100%';
        break;
      case 'Fair':
        position = '0 50%';
        break;
      case 'Good':
      case 'Very Good':
      case 'Excellent':
        position = '0 0%';
        break;
    }
    return position;
  }

  _computedReviews(reviewsCount) {
    return `${reviewsCount} Reviews`;
  }

  _computedRating(score) {
    if (score <= 67) {
      return 'Poor';
    } else if (score <= 74) {
      return 'Fair';
    } else if (score <= 79) {
      return 'Good';
    } else if (score <= 85) {
      return 'Very Good';
    } else {
      return 'Excellent';
    }
  }
}

customElements.define('hotel-review', HotelReview);