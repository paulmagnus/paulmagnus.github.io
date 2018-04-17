function toggleCollapse(element) {
    var e = element;

    // find the next case of .collapseable
    while (!e.className || e.className.search("collapseable") == -1) {

	e = e.nextSibling
    }

    if (!e.style || e.style.height == "auto") {
	e.style.height = "0px";
	e.style.overflow = "hidden";
    }
    else {
	e.style.height = "auto";
    }
}

function smallCollapse(element) {
    var mainPart = element.innerHTML.slice(2);
    var beginning = element.innerHTML.slice(0,2);

    if (beginning == "- ") {
        element.innerHTML = "+ " + mainPart;
    }
    else {
        element.innerHTML = "- " + mainPart;
    }

    toggleCollapse(element)
}