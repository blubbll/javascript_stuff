# javascript_stuff
some javascript snippets i find useful

- find.js (find elements)

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



- eventManager.js (manage events)

  - usage:
    - add an Event to Element:
    
       events.add(elem, "click", function(){
    
       action();
      
       });
       
       
     - remove an Event from Element:
       
       events.remove(elem, "click");
       
     - remove all Events from Element:
       
       events.remove(elem);
       
     - reset all Events:
       
       events.clear();  
  
  - import:
    - https://rawgithub.com/blubbll/javascript_stuff/master/dist/eventmanager.min.js


- timecheck.js (check timestuff; uses browser's time)

  - usage:
    - check if Day:
    
       time.isDay;
       
    - check if Night:
    
       time.isNight;
  
  - import:
    - https://rawgithub.com/blubbll/javascript_stuff/master/dist/timecheck.min.js



- Visi.js (show and hide stuff, relies on css's visibility flag)

  - usage:
    - hide element
    
       Visi.hide(elem);
       
    - show element:
    
       Visi.show(elem);
       
    - check if element is visible:
    
       Visi.shown(elem);
       
    - check if element is hidden:
    
       Visi.hidden(elem);
  
    - reset visibility modifications:
    
       Visi.hidden(elem);
  
  - import:
    - https://rawgithub.com/blubbll/javascript_stuff/master/dist/Visi.min.js
