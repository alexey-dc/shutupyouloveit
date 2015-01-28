var express = require("express");

/****************************************************
******************* CONSTANTS ***********************
*****************************************************/
var HTTP_PORT = Number(process.env.PORT || 5033);

/****************************************************
******************* UTILITY *************************
*****************************************************/


/****************************************************
******************* INITIALIZATION ******************
*****************************************************/


function initHTTP()
{
    var app = express();  
    app.use('/', express.static(__dirname + '/public'))

    app.listen(HTTP_PORT, function() 
    {
      console.log("Listening on " + HTTP_PORT);
    });
}


function init()
{
  initHTTP()
}

init()