//var quien = prompt("A quien ama makita?");
//alert(quien); //


var konami = {};

konami.keys = [];
konami.string = '38,38,40,40,37,39,37,39,66,65';
konami.check = function(e) {
  konami.keys.push(e.keyCode);
  // no memory abuses
  console.log(e.keyCode);
  if (konami.keys.length > 10) {
    konami.keys.shift();
  }
  if (konami.keys.toString().indexOf(konami.string) >= 0) {
    $(document).unbind('keydown', konami.check);
    konami.callback();
  }
};

// change this function content if you want anything else than unicorns
// but, really?! What would you want but unicorns!
konami.callback = function() {
  $.getScript('http://www.cornify.com/js/cornify.js', function() {
    cornify_add();
    $(document).bind('keydown', cornify_add);
  });
};

// all set, start it
$(document).bind('keydown', konami.check);