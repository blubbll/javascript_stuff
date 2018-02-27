//Finde Objekte in HTML : )
function find(search) {
    
    //attr mit val
    if (search.indexOf('=') !== -1) {
        type = '=';
        attr = str.split('=')[0];
        val = str.split('=')[1];
        
        //nur attr
    } else if (search.indexOf('[') !== -1 && search.indexOf(']') !== -1) {
        type = "[]";
        attr = search.replace("[", '').replace("]", '');
        
        //normales vorgehen mit erstem Zeichen
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
            return document.querySelector('[' + attr + ']');

            //attr + value
        case '=':
            return document.querySelector('[' + attr + '"="' + val + '"]');

            //tagname
        default:
            return document.getElementsByTagName(search)[0];
    }
}
