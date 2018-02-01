// $(document).ready(function () {
//     $('.radio-option').click(function () {
//         $(this).not(this).removeClass('click');
//         $(this).toggleClass("click");
//     });
// });


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
       // Action to be performed when the document is read;
    }
};

var cors = "https://cors-anywhere.herokuapp.com/";
var getUrl = url => cors + url;

$.get(getUrl('https://www.kham.com.tw/application/UTK01/UTK0101_06.aspx?TYPE=1&CATEGORY=80')).done(
    (s) => {
        var el = document.createElement( 'div' );
        el.innerHTML = s;
        console.log($(el).find('title').text());
    }
).fail(
    (e) => {
        console.log('e: ', e);
    }
);

