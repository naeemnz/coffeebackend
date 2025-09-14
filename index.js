require('dotenv').config()
const express = require('express')
// console.log(process.env) // remove this after you've confirmed it is working
// console.log('Hello, World!');
//or import express from 'express'; -- IGNORE -- same as above
const app = express()
const port = 4000 //jub env variables .env me define hojaye to sirf wohi port kam karenge locally, 4000 ki jagah .env me define port chalega, 4000 tab chalega jab .env me kuch define nahi hoga

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/instagram', (req, res) => {
    res.send('n663.68')
})
//request and response: req and res
app.get('/login', (req, res) => {
    res.send('<h3>Please login at our Login Page</h3>')
    //to stop the server: ctrl + c
})

app.get('/youtube', (req, res) => {
  res.send('<h4>Welcome to YouTube</h4>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
