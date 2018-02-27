function addEvent(element, action, func){
    
    window.events_+action = func;
    handle = window.events_+action;
    
    element.addEventListener(element, handle);
    
}

function removeEvent(element, action){
    
    window.action_func = func;
    handle = window.events_+action;
    
    element.addEventListener(element, handle);
    
}
