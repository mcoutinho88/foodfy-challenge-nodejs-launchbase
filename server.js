const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const receitas = require('./data')

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', function (req, res) {
    return res.render('index', { items: receitas })

} )


server.get('/about', function (req, res) {
    return res.render('about')

} )


server.get('/recipes', function (req, res) {
    return res.render('recipes', { items: receitas })

} )


server.get('/recipes/:index', function (req, res) {
    const recipeIndex = req.params.index
    

    return res.render('recipe', { items: receitas[recipeIndex] })

} )


server.listen(5000, () =>
    console.log("server is running")
)