function find(search) {
    //Attr
    if (search.indexOf('=') !== -1) {
        type = '=';
        attr = str.split('=')[0];
        val = str.split('=')[1];
        //Attr mit value
    } else if (search.indexOf('[') !== -1 && search.indexOf(']') !== -1) {
        type = "[]";
        attr = search.replace("[", '').replace("]", '');
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
            return document.querySelector('[' + attr + ']');

            //attr + value
        case '=':
            return document.querySelector('[' + attr + '"="' + val + '"]');

            //tagname
        default:
            return document.getElementsByTagName(search)[0];
    }


}

function findAll(search) {
    //Attr
str = search.toString()
    if (search.indexOf('=') !== -1) {
        type = '=';
        attr = str.split('=')[0];
        val = str.split('=')[1];
        //Attr mit value
    } else if (search.indexOf('[') !== -1 && search.indexOf(']') !== -1) {
        type = "[]";
        attr = search.replace("[", '').replace("]", '');
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
            return document.querySelectorAll('[' + attr + ']');

            //attr + value
        case '=':
            return document.querySelectorAll('[' + attr + '"="' + val + '"]');

            //tagname
        default:
            return document.getElementsByTagName(search);
    }
}
