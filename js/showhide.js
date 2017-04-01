function toggle(showHideDiv, switchTextDiv) {
	var ele = document.getElementById(showHideDiv);
	var text = document.getElementById(switchTextDiv);
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		text.innerHTML = "expand";
  	}
	else {
		ele.style.display = "block";
		text.innerHTML = "collapse";
	}
}
function toggleall(contentDiv, controlDiv, controlall) {
	var text = document.getElementById(controlall);
	var temp;
	if(text.innerHTML == "expand all") {
		for(i=0; i < contentDiv.length; i++) {
			temp = document.getElementById(controlDiv[i])
			if(temp.innerHTML == "expand") toggle(contentDiv[i],controlDiv[i])
		}
		text.innerHTML = "collapse all"
	}
	else {
		for(i=0; i < contentDiv.length; i++) {
			temp = document.getElementById(controlDiv[i])
			if(temp.innerHTML == "collapse") toggle(contentDiv[i],controlDiv[i])
		}
		text.innerHTML = "expand all"
	}
}