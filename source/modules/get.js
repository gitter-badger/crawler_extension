
function getHTML(url, succ){
    var cors = "https://cors-anywhere.herokuapp.com/"
    var getUrl = url => cors + url
    return new Promise((resolve, reject)=>{
      $.get(getUrl(url)).done(
        (s) => {
          var el = document.createElement( 'div' );
          el.innerHTML = s;
          resolve(el);
        }
      ).fail(
        (e) => {
          reject(e);
        }
      );
    })
}

// module.exports = getHTML;