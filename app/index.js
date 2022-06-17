const Koa = require( 'koa' );
const app = new Koa();
const fs = require('fs');

function render(dow) {
  return `<html>
  <head>
    <style>
    body {
      margin: 0px;
      font-family: monospace;
    }
    #mg {
      width: 870px;
      height: 240px;
      border: 1px solid grey;
      padding: 30px;
      position: relative;
      background-color: white;
      font-size: xx-large;
      font-family: sans-serif;
    }
    #mg div {
      background-color: #234746;
      width:5px;
      margin: 2px;
      float: left;
      position: absolute;
      bottom: 0;
    }
    </style>
  </head>
  <body>
    <img src="top-right.png" style="align: right; float: right; width: 80px;" />
    <img src="xperts-logo.png" style="align:left; width: 120px; padding: 10px; margin-bottom: 40px;" />
    <img src="mark-blue.png" style=" position: absolute; left: 950px; top: 270px; width: 100px;" />

  <div id="mg">It's <b>${dow}</b>. <br>Have a great day!</div>
  <div id="avg"></div>
  </body>
  </html>`
}

app.use( ctx => {
  if ( ctx.request.url === '/' ) {
    ctx.body = render(process.env.TODAY);
  } else {
    let fileName = ctx.request.url.split('/').slice(-1)[0];
    const src = fs.createReadStream( fileName );
    ctx.response.set( "Content-Type", "image/png" );
    ctx.body = src;
  }
})

app.listen(80);
