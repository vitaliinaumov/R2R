import $ from 'jquery';
import 'lightgallery';
import 'lightgallery/modules/lg-zoom.min'
import 'lightgallery/modules/lg-video.min'

$(document).ready(function() {
  $("#lightgallery").lightGallery({
    selector: '.item-gallery',
    zoom: true
  });
  $(".course-block-slider").lightGallery({
    selector: '.item-gallery',
    zoom: true,
    autoplayFirstVideo: true,
    youtubePlayerParams: {
      modestbranding: 1,
      showinfo: 0,
      rel: 1,
      controls: 1,

    },
  });

  $(".gallery-search-page").lightGallery({
    selector: '.item-gallery',
    zoom: true
  });




});