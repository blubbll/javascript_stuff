function find(search, all = false) {

    if (search.indexOf('=') !== -1) {
        type = '=';
        attr = str.split('=')[0];
        val = str.split('=')[1];
    } else if (search.indexOf('[') !== -1 && search.indexOf(']') !== -1) {
        type = "[]";
        attr = search.replace("[", '').replace("]", '');
    } else {
        type = search.charAt(0);
    }
    //singular
    switch (type) {
        //class
        case '.':
            return document.getElementsByClassName(search)[0];
            break;

            //id
        case '#':
            return document.getElementById(search);
            break;

            //attr
        case '[]':
            return document.querySelector('[' + attr + ']');
            break;

            //attr + value
        case '=':
            return document.querySelector('[' + attr + '"="' + val + '"]');
            break;

            //tagname
        default:
            return document.getElementsByTagName(search)[0];
    }


}

function findAll(search) {

    if (search.indexOf('=') !== -1) {
        type = '=';
        attr = str.split('=')[0];
        val = str.split('=')[1];
    } else if (search.indexOf('[') !== -1 && search.indexOf(']') !== -1) {
        type = "[]";
        attr = search.replace("[", '').replace("]", '');
    } else {
        type = search.charAt(0);
    }
    switch (type) {
        //class
        case '.':
            return document.getElementsByClassName(search);
            break;

            //id
        case '#':
            return document.getElementsById(search);
            break;

            //attr
        case '[]':
            return document.querySelectorAll('[' + attr + ']');
            break;

            //attr + value
        case '=':
            return document.querySelectorAll('[' + attr + '"="' + val + '"]');
            break;

            //tagname
        default:
            return document.getElementsByTagName(search);
    }
}
