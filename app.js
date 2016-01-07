var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('views', './templates');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded());

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test2');
app.use('/api', require('./api'));



app.get('/api/vi/querys', function(req, res) {
	
})




/*Metodo post que se encarga de monitorear los registros ingresados desde
  api de tanaza. Observacion: esta direcion es la utilizada pero falta por
  determinar el la idea correcta para ejecutar el index de la carpeta 
  registers*/
app.post('/api/v1/registers', function(req, res) {
	
})
app.listen(8080);