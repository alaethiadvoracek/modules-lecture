const express = require('express' );
const cars = require('./modules/cars');
const app = express();
const port = 6541;


app.use( express.static('server/public') );

app.listen( port, function(){
    console.log('server up on: ', port);
});//
//creating a get request route
app.get('/cars', function( req, res){//needs to be in alphabetical order req then res!
    console.log('/cars get hit');  
    res.send( cars.randomCar() ); //getting a response from your request
}); //end get /cars