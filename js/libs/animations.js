$(function() {

	$('#recent-work div').hoverIntent(showDetails,hideDetails);
	
	function showDetails(){
		$(this).children('.recent-project-type').animate({ top: 0 }, 200);
		$(this).children('.recent-project-title').animate({ bottom: 0 }, 200);
	}
	
	function hideDetails(){
		$(this).children('.recent-project-type').animate({ top: '-26px' }, 200);
		$(this).children('.recent-project-title').animate({ bottom: '-44px' }, 200);
	}
	
});