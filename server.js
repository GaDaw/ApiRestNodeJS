const express = require('express')
const app = express()
app.get('/:name?', function (req, res) {
	if (req.params.name){
		res.send("Hola " + req.params.name)
	}
	else{
		res.send("Hola anónimo")
	}
})
app.listen(3000, function () {
	console.log('Servidor activo en http://localhost:3000!')
})


