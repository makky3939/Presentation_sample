/*
 * Delay Plugin for jQuery 1.1.2
 *
 * Copyright(C) 2007 LEARNING RESOURCE LAB.
 * http://postal-search-apis-and-solutions.blogspot.com/
 *
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 */
(function($) {
  
  // $.delay
  $.delay = {

    // $.delay.queue
    queue: [],
    
    // $.delay.timer
    timer: null,

    // $.delay.pause
    pause: function() {
      if (!$.delay.timer)
        return;
      clearInterval($.delay.timer);
      $.delay.timer = null;
    }
  };

  // $.resume
  $.resume = function(interval) {
    $.delay.pause();
    $.delay.timer = setInterval(function() {
      var fn = $.delay.queue.shift();
      fn ? fn() : $.delay.pause();
    }, interval || 10);
  };

  // delay
  $.fn.delay = function(fn) {
    var self = this;
    $.delay.queue.push(function() {
      self.each(fn);
    });
    return self;
  };

})(jQuery); // function($)
