$(document).ready(function () {
    $('.radio-option').click(function () {
        $(this).not(this).removeClass('click');
        $(this).toggleClass("click");
    });

    var url = 'https://www.kham.com.tw/application/UTK01/UTK0101_06.aspx?TYPE=1&CATEGORY=80';
    $('.start').click(
      ()=> {getHTML(url).then(
        (s) => {
          console.log($(s).find('title').text())
        },        
        (e) => console.error(e)
      )}
    )
});
