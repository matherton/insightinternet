/* scipt to highlight link on map area hover */

function imageMap() {

	var aberdeen = document.getElementById("aberdeen");
	var dundee = document.getElementById("dundee");
	var edinburgh = document.getElementById("edinburgh");
	var glasgow = document.getElementById("glasgow");

	aberdeen.addEventListener("mouseenter", function() {
		document.getElementById("AberdeenLink").className = "active";
		document.getElementById("tooltipAberdeen").className += " visable";
		document.getElementsByClassName("highlight aberdeen").className = " ";
		aberdeen.addEventListener("mouseleave", function() {
			document.getElementById("tooltipAberdeen").className = "tooltip aberdeen";
			document.getElementById("AberdeenLink").className = " ";
		});
	});

	dundee.addEventListener("mouseenter", function() {
		document.getElementById("DundeeLink").className = "active";
		document.getElementById("tooltipDundee").className += " visable";
		dundee.addEventListener("mouseleave", function() {
			document.getElementById("tooltipDundee").className = "tooltip dundee";
			document.getElementById("DundeeLink").className = " ";
		});
	});

	edinburgh.addEventListener("mouseenter", function() {
		document.getElementById("EdinburghLink").className = "active";
		document.getElementById("tooltipEdinburgh").className += " visable";
		edinburgh.addEventListener("mouseleave", function() {
			document.getElementById("tooltipEdinburgh").className = "tooltip edinburgh";
			document.getElementById("EdinburghLink").className = " ";
		});
	});

	glasgow.addEventListener("mouseenter", function() {
		document.getElementById("GlasgowLink").className = "active";
		document.getElementById("tooltipGlasgow").className += " visable";
		glasgow.addEventListener("mouseleave", function() {
			document.getElementById("tooltipGlasgow").className = "tooltip glasgow";
			document.getElementById("GlasgowLink").className = " ";
		});
	});
	
}

imageMap();
