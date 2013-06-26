function map() {
	if(GBrowserIsCompatible()){
		var map = new GMap2(document.getElementById('map'));
		map.setCenter(new GLatLng(28.596279,-81.301206), 15);

		map.addControl(new GSmallMapControl());

		new GKeyboardHandler(map);

		var info_window = '<div style="width:18em; background:#f9f9f9; border:1px solid #ccc; padding:6px; height:12em; font-family:Arial, sans-serif; font-size:small"><strong style="font-weight:bold;">Intellectual Business Solutions :<\/strong><br \/>3300 University Blvd.<br \/>Winter Park, FL 32792<br \/><a onclick="window.open(this.href,\'_blank\'); return false;" href="http://maps.google.com/maps?f=d&amp;hl=en&amp;q=3300+University+Blvd.+Winter+Park,+FL+32804+(Intellectual Business Solutions)">Get Directions<\/a><br \/><br \/><strong>Phone<\/strong>: (407) 679-6333<br \/><strong>Toll-Free<\/strong>: (888) 226-7625<br \/><strong>Fax<\/strong>: (407) 678-0070<\/div>';
		var marker = new GMarker(new GLatLng(28.596279,-81.301206));
		map.addOverlay(marker);
		GEvent.addListener(marker, 'click', function(){
			marker.openInfoWindowHtml(info_window);
		});

		marker.openInfoWindowHtml(info_window);
	}
}