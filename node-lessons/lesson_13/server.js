var express = require('express');
var app = express();

app.get(['/'], function (req, res) {
 res.send("<h2>Decide you must, how to serve them best - [/empire, /mercenaries, /rebel] </h2>");
})

app.get(['/empire', '/mercenaries'], function (req, res) {
 res.send("<h2>These aren't the droids you're looking for </h2><br>");
})

app.get('/rebel', function (req, res) {
 res.send(message);
})
var server = app.listen(8081, '127.0.0.1', function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})










































message

= `
<pre> 

                                              /~\\                        
                                             ( oo|     What a desolate   
                                             _\\=/_      place this is.   
                             ___            /  _  \\                      
                            /() \\          //|/.\\|\\\\                     
                          _|_____|_       ||  \\_/  ||                    
                         | | === | |      || |\\ /| ||                    
                         |_|  O  |_|      #  \\_ _/  #                    
                          ||  O  ||          | | |                       
                          ||__*__||          | | |                       
                         |~ \\___/ ~|         []|[]                       
                         /=\\ /=\\ /=\\         | | |                       
       \\_________________[_]_[_]_[_]________/_]_[_\\______________________

</pre>
`;