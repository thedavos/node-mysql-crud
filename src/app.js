const express = require('express')
const path = require('path')
const morgan = require('morgan')
const mysql = require('mysql')
const connection = require('express-myconnection')

const app = express()

// Importing routes
const customerRoutes = require('./routes/customer')

// Settings
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


// Middlewares
app.use(morgan('dev'))
app.use(connection(mysql, {
    host: '127.0.0.1',
    user: 'root',
    password: '@davosmochilanegra45',
    port: 3306,
    database: 'crudnodejsmysql'
}, 'single'))
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/', customerRoutes)

// Static files
app.use(express.static(path.join(__dirname, 'public')))


// Starting Server
app.listen(app.get('port'), () => {
    console.log('Server on port 3000')
})