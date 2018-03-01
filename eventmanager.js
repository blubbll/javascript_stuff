var events = {
  //Add function for specific action to element
    add: function(element, action, func) {
            window[element + action] = func;
    handle = window[element + action];
    if (document.addEventListener)
        element.addEventListener(action, handle, false);
    else if (document.detachEvent)
        element.attachEventListener(action, handle);
    },
  //Remove event for element
    remove: function(element, action) {
            handle = window[element + action];
    if (document.removeEventListener)
        element.removeEventListener(action, handle, false);
    else if (document.detachEvent)
        element.detachEvent(action, handle)
    },
  //Removes all Events from element
    removeAll: function(element) {
         element.outerHTML = element.outerHTML
    },
  //Remove all Events, globally.
    reset: function(e) {
        //Remove all Events, globally.
      document.body.innerHTML = document.body.innerHTML;
    }
};
