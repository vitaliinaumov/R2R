import $ from "jquery";
import 'slick-carousel';
import 'materialize-css';
import {supportsTouch} from "./function";

document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tabs');
  let TabsInstances = M.Tabs.init(tabs, {
  });

  const sliderTabs = document.querySelectorAll('.tab-slider');
  sliderTabs.forEach(tab => {
    tab.addEventListener('click', e => {
      console.log('dfdf');
      setTimeout(function () {
        $('.course-block-slider').slick('setPosition');
      },100)

    })
  })



});



