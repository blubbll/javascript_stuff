function find(search) {
    //Attr
    if (search.indexOf('[') !== -1 && search.indexOf('=') == -1) {
      

      type = "[]";
        attr = search.split('=')[0];
      
        //Attr mit value
    } else if (search.indexOf('[') !== -1 && search.indexOf('=') != -1) {

           type = '=';
      
      attr = search.split('=')[0].replace("[", '');


        val = search.split('=')[1].replace("[", '').replace("]", '').replace("\"", '').replace("\"", '')
       
        //Normaler typ
    } else {
        type = search.charAt(0);
    }
    switch (type) {
        //class
        case '.':
            return document.getElementsByClassName(search)[0];

            //id
        case '#':
            return document.getElementById(search);

            //attr
        case '[]':
            All = document.getElementsByTagName("*");
              for (var i = 0; i < All.length; i++)       {
                if (All[0].getAttribute(attr) == null) { return All[0]; }
              }
        break;
            //attr + value
        case '=':
            All = document.getElementsByTagName("*");
              for (var i = 0; i < All.length; i++)       {

                if (All[i].getAttribute(attr) == val) {
                  return All[i];                                           }
              }
   

            //tagname
        default:
            return document.getElementsByTagName(search)[0];
    }


}

function findAll(search) {
    //Attr
    if (search.indexOf('[') !== -1 && search.indexOf('=') == -1) {
      

      type = "[]";
        attr = search.split('=')[0];
      
        //Attr mit value
    } else if (search.indexOf('[') !== -1 && search.indexOf('=') != -1) {

           type = '=';
      
      attr = search.replace("[", '').replace("]", '');

        val = search.split('=')[1].replace("[", '').replace("]", '').replace("\"", '').replace("\"", '')
        //Normaler typ
    } else {
        type = search.charAt(0);
    }
    switch (type) {
        //class
        case '.':
            return document.getElementsByClassName(search);
            //id
        case '#':
            return document.getElementsById(search);

            //attr
        case '[]':
            All = document.getElementsByTagName("*");
              for (var i = 0; i < All.length; i++)       {
                if (All[0].getAttribute(attr) == null) { return All[i]; }
              }

            //attr + value
        case '=':
        
            All = document.getElementsByTagName("*");
              for (var i = 0; i < All.length; i++)       {
                if (All[i].getAttribute(attr) == val) { return All[i]; }
              }

            //tagname
        default:
            return document.getElementsByTagName(search);
    }
}
