function toggleCollapse(element) {
    var e = element;

    // find the next case of .collapseable
    while (e.className != "collapseable") {
	e = e.nextSibling
    }


    if (e.style.height != "0px") {
	e.style.height = "0px";
	e.style.overflow = "hidden";
    }
    else {
	e.style.height = "auto";
    }

}