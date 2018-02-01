$(document).ready(function () {
    $('.radio-option').click(function () {
        $(this).not(this).removeClass('click');
        $(this).toggleClass("click");
    });
});


var cors = "https://cors-anywhere.herokuapp.com/"
var getUrl = url => cors + url
var url = 'https://www.kham.com.tw/application/UTK01/UTK0101_06.aspx?TYPE=1&CATEGORY=80'
$.get(getUrl(url)).done(
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