import jQuery from 'jquery';
//import { getBrowserLanguage } from 'helpers/getBrowserSettings';
import { browserHistory as history } from 'react-router';

(($) => {
  const App = {
    init() {
      App.initialMessage();
      //App.homepageOpacity();
      //App.MaxImage_Single();
      //App.FormValidation();
    },

    initialMessage() {
      console.log('Welcome to Snippod Starter Demo App.');
      console.log('Do you want to know more? Join Snippod Inc.!');
    }

    //Homepage Height
    //homepageHeight() {
    //  const h = window.innerHeight;
    //  const w = window.innerWidth;
    //  if (h < 568) {
    //    h = 568;
    //  }
    //  if (w > 767 && h < 638) {
    //    h = 638;
    //  }
    //  if (w > 991 && h < 692) {
    //    h = 692;
    //  }
    //  if (w > 1199 && h < 830) {
    //    h = 830;
    //  }
    //  $('.hero_fullscreen').css('height', h);
    //},


    // Homepage Opacity - for single background image version
    //homepageOpacity() {
    //  const h = window.innerHeight;
    //  console.log('sdajhlds');
    //
    //  $('#wrap-content').on('scroll', () => {
    //    console.log('sdajhlds222');
    //    const st = $(this).scrollTop();
    //    $('#topic-ground-center').css('opacity', (1 - st / h));
    //  });
    //},

    //// MaxImage Fullscreen Background Slider
    //MaxImage_Single: function () {
    //  "use strict";
    //  $('#maximage_single').maximage();
    //},

  };

  $(() => {
    App.init();
  });

})(jQuery);

/*eslint-disable*/

//Google Analytics Setup
// for google analytics pageview
const ga = require('react-ga');
const GA_TRACKING_ID = require('constants/defaults').GA_TRACKING_ID;

ga.initialize(GA_TRACKING_ID);
// for google analytics pageview
history.listen(function (location) {
  ga.pageview(location.pathname);
});
