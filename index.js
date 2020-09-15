const moment =  require('moment');
const dateForatter = require('./dataFormatter')
// psHelloBucket
// psHelloHTTP
// psHelloPub-sub

exports.helloHTTP =function helloHTTP(req,res){
    res.status(200).send(dateForatter.date());
}

exports.psHelloPubsub = function psHelloPubsub(event,callback){
    console.log(`hello pubsub ${moment().format('MMM Da YYYY, h:mm:ss a ')}`)
    callback();
}

exports.psHelloBucket = function psHelloBucket(event,callback){
    console.log(`hello storage ${moment().format('MMM Da YYYY, h:mm:ss a ')}`)
    callback();
} 