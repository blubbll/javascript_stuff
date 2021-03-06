var events = {
    //Add function for specific action to element
    add: function(element, action, func) {
        function isArray(r) {
            return !!r && r.constructor === Array
        }
        if (element) {
            window[element + action] = func;
            handle = window[element + action];
            if (isArray(action)) {
                for (var i = 0, len = action.length; i < len; i++) {
                    if (document.addEventListener)
                        element.addEventListener(action[i], handle, false);
                    else if (document.detachEvent)
                        element.attachEventListener(action[i], handle);
                }
            }
            if (document.addEventListener)
                element.addEventListener(action, handle, false);
            else if (document.detachEvent)
                element.attachEventListener(action, handle);
        }
    },
    //Remove event for element
    remove: function(element, action) {
        //remove one
        if (typeof action != "undefined") {
            handle = window[element + action];
            if (document.removeEventListener)
                element.removeEventListener(action, handle, false);
            else if (document.detachEvent)
                element.detachEvent(action, handle)
        }
        //remove all
        else if (typeof action == "undefined") {
            element.outerHTML = element.outerHTML
        }
    },
    //Remove all Events, globally.
    clear: function(e) {
        //Remove all Events, globally.
        document.body.innerHTML = document.body.innerHTML;
    }
};
