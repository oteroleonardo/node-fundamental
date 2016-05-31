var async = require('async');

async.parallel([
    function(callback){
        console.log('1st function call starts.');
        setTimeout(function(){
            console.log('1st function call resolved.');
            callback(null, 1); // err, result
        }, 1000);
    },
    function(callback){
        console.log('2nd function call starts.');
        setTimeout(function(){
            console.log('2nd function call resolved.');
            callback(null, 2); // err, result
        }, 100);
    }
],
function(err, results){
    // err propagates all errors within the parallel functions
    // results holds all the results, [1, 2] in this case
    console.log('But results return in order as espected ;)');
    console.dir(results);
});