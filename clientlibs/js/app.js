$(document).ready(function () {
	$.get("https://api.github.com/repos/mrrobbins/matt-kelsey-wedding-site/contributors", function( data ) {
		var contribs = 0;
	  for (c in data) {
		  contribs += data[c].contributions;
	  }
	  $("#site-commits").attr("data-to", contribs);
	  $("#site-commits").addClass("timer");
	});
});
