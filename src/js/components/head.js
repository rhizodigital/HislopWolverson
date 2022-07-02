import Headroom from "headroom.js";


var header = document.querySelector('header');

var options = {
    offset: 100,
}

var headroom = new Headroom(header, options);

headroom.init()