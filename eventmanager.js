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
    element.outerHTML = element.outerHTML
}

//Remove all Events, globally.
function removeAllEvents(){
  document.body.innerHTML = document.body.innerHTML;
}
