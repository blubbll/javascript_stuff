var time = {

    get stunde(){return new Date().getHours()},
  
    get minute(){return new Date().getMinutes()},
  
    get sekunde(){return new Date().getSeconds()},
  
    get string(){return new Date().toLocaleTimeString()},
  
    get string_HM(){return new Date().toLocaleTimeString().substr(0,5)}
    
};

var date = {

    get tag(){return new Date().getDate()},
  
    get monat(){return new Date().getMonth()+1},
  
    get jahr(){return new Date().getFullYear()},
  
    get string() {
        str = '';
        d = new Date();

        str += String("00" + d.getDate()).slice(-2) +
            '.';

        str += String("00" + (d.getMonth()+1)).slice(-2) +
            '.';

        str += String("00" + d.getFullYear()).slice(-4);


        return str;
    }
  
  
 
    
};
