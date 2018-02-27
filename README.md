# javascript_stuff
some javascript snippets i find useful

- find.js

  - usage:
    - find("#content");  (ID)
    - find(".classname");(CLASS)
    - find("button");    (TAGNAME)
    - find("[w4]");      (ATTR)
    - find('[toggle="modal"]'); (ATTR w/ VALUE)
    - findAll('.test');         (ALL with Class)
    - findAll ...
  
  - import:
    - https://rawgithub.com/blubbll/javascript_stuff/master/dist/find.min.js

- eventManager.js

  - usage:
    - add an Event:
    
       addEvent(elem, "click", function(){
    
       action();
      
       }, false);
       
       
     - remove an Event:
       
       removeEvent(elem, "click");
     - remove all Events from Element:
       
       removeEvents(elem);
  
  - import:
    - https://rawgithub.com/blubbll/javascript_stuff/master/dist/eventmanager.min.js
