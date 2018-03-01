var visi = {
  
  
    //hide element
    hide: function(elem) {
        elem.style.visibility = "hidden";
    },

    //show element
    show: function(elem) {
        elem.style.visibility = "visible";
    },
  
    //element hidden?
    hidden: function(elem) {
        switch (elem.style.visibility) {
            case "hidden":
                return true;
            case "visible":
                return false;
            default:
                return true;
        }
    },

  //element shown?
    shown: function(elem) {
        switch (elem.style.visibility) {
            case "visible":
                return true;
            case "hidden":
                return false;
            default:
                return true;
        }
    },

  //reset visibility modifications for element
    reset: function(elem) {
        s = elem.style
        if (s.removeAttribute)
            s.removeAttribute('visibility');

        else if (s.removeProperty)
            s.removeProperty('visibility');

        if (elem.getAttribute("style") === '')
            elem.removeAttribute("style");
    }
}
