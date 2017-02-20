/* scipt to highlight link on map area hover */

function imageMap() {

	var Dundee = document.getElementById("aberdeen");
	var dundee = document.getElementById("dundee");
	var edinburgh = document.getElementById("edinburgh");
	var glasgow = document.getElementById("glasgow");

	var aberdeenLink = document.getElementById("AberdeenLink");
	var tooltipAberdeen = document.getElementById("tooltipAberdeen");
	var highLightAberdeen = document.getElementsByClassName("highlight aberdeen");

	var dundeeLink = document.getElementById("DundeeLink");
	var tooltipDundee = document.getElementById("tooltipDundee");
	var highLightDundee = document.getElementsByClassName("highlight dundee");

	var edinburghLink = document.getElementById("EdinburghLink");
	var tooltipEdinburgh = document.getElementById("tooltipEdinburgh");
	var highLightEdinburgh = document.getElementsByClassName("highlight edinburgh");

	var glasgowLink = document.getElementById("GlasgowLink");
	var tooltipGlasgow = document.getElementById("tooltipGlasgow");
	var highLightGlasgow = document.getElementsByClassName("highlight glasgow");

	//mouse enter/leave function on Aberdeen hotspot
	aberdeen.addEventListener("mouseenter", function() {
		aberdeenLink.className = "active";
		tooltipAberdeen.className += " visable";
		highLightAberdeen.className = " ";
		aberdeen.addEventListener("mouseleave", function() {
			tooltipAberdeen.className = "tooltip aberdeen";
			AberdeenLink.className = " ";
		});
	});

	//mouse enter/leave function on Aberdeen link
	aberdeenLink.addEventListener("mouseenter", function() {
		tooltipAberdeen.className += " visable";
		aberdeenLink.addEventListener("mouseleave", function() { 
			tooltipAberdeen.className = "tooltip aberdeen";
		});
	});

	//mouse enter/leave function on Dundee hotspot
	dundee.addEventListener("mouseenter", function() {
		dundeeLink.className = "active";
		tooltipDundee.className += " visable";
		highLightDundee.className = " ";
		dundee.addEventListener("mouseleave", function() {
			tooltipDundee.className = "tooltip dundee";
			dundeeLink.className = " ";
		});
	});

	//mouse enter/leave function on Dundee link
	dundeeLink.addEventListener("mouseenter", function() {
		tooltipDundee.className += " visable";
		dundeeLink.addEventListener("mouseleave", function() { 
			tooltipDundee.className = "tooltip dundee";
		});
	});

	//mouse enter/leave function on Edinburgh hotspot
	edinburgh.addEventListener("mouseenter", function() {
		edinburghLink.className = "active";
		tooltipEdinburgh.className += " visable";
		highLightEdinburgh.className = " ";
		edinburgh.addEventListener("mouseleave", function() {
			tooltipEdinburgh.className = "tooltip edinburgh";
			edinburghLink.className = " ";
		});
	});

	//mouse enter/leave function on Edinburgh link
	edinburghLink.addEventListener("mouseenter", function() {
		tooltipEdinburgh.className += " visable";
		edinburghLink.addEventListener("mouseleave", function() { 
			tooltipEdinburgh.className = "tooltip edinburgh";
		});
	});

	//mouse enter/leave function on Glagow hotspot
	glasgow.addEventListener("mouseenter", function() {
		glasgowLink.className = "active";
		tooltipGlasgow.className += " visable";
		highLightGlasgow.className = " ";
		glasgow.addEventListener("mouseleave", function() {
			tooltipGlasgow.className = "tooltip glasgow";
			glasgowLink.className = " ";
		});
	});

	//mouse enter/leave function on Glasgow link
	glasgowLink.addEventListener("mouseenter", function() {
		tooltipGlasgow.className += " visable";
		glasgowLink.addEventListener("mouseleave", function() { 
			tooltipGlasgow.className = "tooltip glasgow";
		});
	});
	
}

imageMap();
