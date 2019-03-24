const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    // server.get('items:id', (req, res) => {
    //   const endPointArray = ['Deafult list item one', 'You may change this list', 'Other lists are allow', 'Try enter your own list']
    //   const queryParams = { item: req.params.id }
    //   app.render(req, res, endPointArray, queryParams)
    // })
    // http://localhost:3000/api/course

      server.get('/api/course', (req, res) => {
       // res.send(req.params.id)
       
       res.send([{"id":"080", "name":"we want it"},{"id":"090", "name":"you want"},{"id":"0990", "name":"Go for Gold"}])
    })

    // server.get('/p/:id', (req, res) => {
    //   const actualPage = '/post'
    //   const queryParams = { title: req.params.id }
    //   app.render(req, res, actualPage, queryParams)
    // })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })