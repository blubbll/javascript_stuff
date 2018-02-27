//Add function for specific action to element
function addEvent(element, action, func) {

    window[element + action] = func;
    
    handle = window[element + action];
    if (document.addEventListener)
        element.addEventListener(action, handle, false);
    else if (document.detachEvent)
        element.attachEventListener(action, handle);

}

//Removes function for specific action of element
function removeEvent(element, action) {
    
    handle = window[element + action];
    
    if (document.removeEventListener)
        element.removeEventListener(action, handle, false);
    else if (document.detachEvent)
        element.detachEvent(action, handle);
}

//Removes all Events from element
function removeEvents(element) {
    var clone = element.cloneNode();
    while (element.firstChild) {
        clone.appendChild(element.lastChild);
    }
    element.parentNode.replaceChild(clone, element);
}
