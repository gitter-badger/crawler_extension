Ninja Crawler !
======



## usage

1. encode `url` into `filename` by
  * removing `http://` or `https://`
  * changing all `.` into `@`
  * changing all `/` into `@@`
  * changing all `?` into `!__!`
  * add `.js` at the end
  * example: `http://example.com/foo/bar?baz=123`
  * becomes `example@com@@foo@@bar!__1baz=123.js`
2. save scraper under `./source/pages/${filename}`

## TODO LIST

* index.js parse all the pages url
* Filter the selected web target
* index.js 
* _send.js
* Query for specific site