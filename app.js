const express = require('express')
const path = require('path')

// Init express
const app = express()

// Load view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Home route
app.get('/', (req, res) => {
  const articles = [
    {
      id: 1,
      title: 'Article one',
      author: 'Daniel Poidy',
      body: 'This my article one'
    },
    {
      id: 2,
      title: 'Article two',
      author: 'John Doe',
      body: 'This my article two'
    },
    {
      id: 3,
      title: 'Article three',
      author: 'Esther Smith',
      body: 'This my article three'
    },
    {
      id: 4,
      title: 'Article four',
      author: 'Yoshua Asinai',
      body: 'This my article four'
    }
  ]
  res.render('index', {
    title: 'Fullstack',
    articles: articles
  })
})

// Adding articles route
app.get('/articles/add', (req, res) => {
  res.render('add_articles', { title: 'Here are my articles' })
})

// Starting server
app.listen(3000, () => {
  console.log('Server is up and running on port 3000')
})
