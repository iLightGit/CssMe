function $(id) {
    return document.getElementById(id);
}

function trim(str) {
    return String(str).replace(/^\s+|\s+$/g, '');
}

function hasClass(el, search) {
	return ((" " + el.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + search + " ") > -1)
}