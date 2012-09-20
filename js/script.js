// If a browser doesn't support CSS3 animations, load up jQuery equivalents
// hoverintent.js makes sure the animations aren't erratic during rapid mousein/mouseout
// animations.js are the jQuery equivalents

yepnope({
  	test : Modernizr.cssanimations,
  	nope : ['js/libs/jquery.hoverintent.js','js/libs/animations.js']
});

