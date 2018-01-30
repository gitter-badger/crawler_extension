$(document).ready(function () {
    $('.radio-option').click(function () {
        $(this).not(this).removeClass('click');
        $(this).toggleClass("click");
    });
});


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Action to be performed when the document is read;
    }
};

var cors = "https://cors-anywhere.herokuapp.com/"
var getUrl = url => cors + url

xhttp.open("GET", getUrl('https://news.ycombinator.com/'), true);
xhttp.send();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
    var xmlString = this.responseText
        , parser = new DOMParser()
        , doc = parser.parseFromString(xmlString, "text/xml");

    var el = document.createElement( 'div' );
    el.innerHTML = this.responseText;
    }
};