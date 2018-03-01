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
    - add an Event to Element:
    
       events.add(elem, "click", function(){
    
       action();
      
       }, false);
       
       
     - remove an Event from Element:
       
       events.remove(elem, "click");
       
     - remove all Events from Element:
       
       events.removeAll(elem);
       
     - reset all Events:
       
       events.reset();  
  
  - import:
    - https://rawgithub.com/blubbll/javascript_stuff/master/dist/eventmanager.min.js
