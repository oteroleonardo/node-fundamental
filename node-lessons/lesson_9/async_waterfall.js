var async = require('async');
var WINK = ';)';
var SMILEY = ':D';
var TONGUE = ':P';

async.waterfall([
    function(callback){
        console.log('1st function call starts.');
        setTimeout(function(){
            console.log('1st function call resolved.');
            throw new Error('My little error');
            callback(null, WINK, SMILEY); // err, result, ... cascade params
        }, 5000);
    },
    function(arg1, arg2, callback){
        console.log(['2nd function call starts receiving arg1:',
            arg1,
            'and arg2:',
            arg2,
            '.'].join(' '));
        setTimeout(function(){
            console.log('2nd function call resolved.');
            var prefix = 'result ';
            callback(null, 
                prefix + TONGUE, 
                prefix + arg2, 
                prefix + arg1); // err, ... multiple results is ok
        }, 3000);
    }
],
function(err, result1, result2, result3){
    // err propagates all errors within the waterfall functions
    console.log(err);
    console.log('Important: waterfall can handle multiple results.');
    console.dir(result1);
    console.dir(result2);
    console.dir(result3);
});