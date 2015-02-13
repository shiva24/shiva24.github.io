$(document).ready(function() {
	    	$('#pagepiling').pagepiling({
	    		menu: '#menu',
	    		anchors: ['page1', 'page2', 'page3', 'page4'],
			    sectionsColor: ['white', '#ee005a', '#39C', '#2C3E50'],
			    navigation: {
			    	'position': 'right',
			   		'tooltips': ['Home', 'Gallery', 'About', 'Contact']
			   	},
			});
	    });

	    //gn menu
	    var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
};

