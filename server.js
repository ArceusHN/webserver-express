
const express = require('express')
const app = express()

const hbs = require('hbs')
require('./hbs/helpers')

const port = process.env.PORT || 3000




app.use(express.static(__dirname + '/public'))

//Espress HBS engine
hbs.registerPartials(__dirname + '/views/parciales')

app.set('view engine','hbs')

//Helpers

app.get('/', (req, res) => {
    
    res.render('home',{
        nombre: 'Omar',
        // anio: new Date().getFullYear()

    }) //Renderiza el archivo home

})

app.get('/about', (req, res) => {
    
    res.render('about',{
        nombre: 'Omar',
        // anio: new Date().getFullYear()
    }) //Renderiza la pagina home

})


app.listen(port,() =>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
})