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

function updateTimer(){
  $("#time_std").text(time.stunde);
  $("#time_min").text(time.minute);
  $("#time_sek").text(time.sekunde);
  
  $("#time_string").text(time.string)
  $("#time_stringHM").text(time.string_HM)
  
}


$("#date_tag").text(date.tag);
$("#date_monat").text(date.monat);
$("#date_jahr").text(date.jahr);

$("#date_string").text(date.string);



var updater = window.setInterval(updateTimer, 900);
