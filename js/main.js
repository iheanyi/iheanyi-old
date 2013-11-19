$( document ).ready(function() {
	//$.scrollIt();

/*  jQuery.getFeed({
     url     : 'http://blog.iheanyi.com/rss/',
     success : function (feed) {
        console.log(feed.title);
        // do more stuff here
     }
  }); */

	$.scrollIt({
  upKey: 38,             // key code to navigate to the next section
  downKey: 40,           // key code to navigate to the previous section
  easing: 'linear',      // the easing function for animation
  scrollTime: 600,       // how long (in ms) the animation takes
  activeClass: 'pure-menu-selected', // class given to the active nav element
  onPageChange: null,    // function(pageIndex) that is called when page is changed
  topOffset: -40         // offste (in px) for fixed top navigation
  });


    $('.posts').rssfeed('http://blog.iheanyi.com/rss/', {
        limit: 5,
        header: false,
        titletag: 'h2',
        dateformat: 'date'
    });

	console.log("READY!");

});