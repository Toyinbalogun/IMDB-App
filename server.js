const express = require('express')
// var path = require("path")
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const {MONGOURI} = require('./keys')

mongoose.connect(MONGOURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

mongoose.connection.on('connected', ()=>{
    console.log("connected to mongo")
}) 

mongoose.connection.on('error', ()=>{
    console.log("error connecting", err)
})

require('./models/user')
require('./models/post')

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

// Static directory to be served
app.use(express.static('public'))

// Here we introduce HTML routing to serve different HTML files
require('./routes/html-routes')(app)



app.use(require('./routes/auth'))
app.use(require('./routes/post'))





// app.use(express.static('public'))
// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: false }));


//request handler for all routes
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, "public/home-page.html"));
// })

// app.get('/login', (req, res) => {
//     res.sendFile(path.join(__dirname, "public/login-page.html"));
// })

// app.get('/regUser-register', (req, res) => {
//     res.sendFile(path.join(__dirname, "public/reg-user-sign-up.html"));
// })

// app.get('/conUser-register', (req, res) => {
//     res.sendFile(path.join(__dirname, "public/contri-user-sign-up.html"));
// })

// app.post('/login', (req, res) => {
    
// })

// app.post('/regUser-register', (req, res) => {
    
// })

// app.post('/conUser-register', (req, res) => {
    
// })

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})