const express = require('express')
const server = express()
const helmet = require('helmet')

const projectsRouter = require('../routes/projects-router')
const actionRouter = require('../routes/projects-router')

server.use(logger)
server.use(helmet())
server.use('/project', projectsRouter)
server.use('/action', actionRouter)
server.use(express.json())

server.get('/', (req, res) => {
  res.send('Web API Sprint 1')
})

function logger(req, res, next) {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const timestamp = hours + ':' + minutes + ':' + seconds

  console.log(
    '\n  ----- Logger -----',
    `\n Method : ${req.method}`,
    `\n URL : localhost:5555${req.originalUrl}`,
    `\n Timestamp : ${timestamp}`,
    '\n  ------------------'
  )

  next()
}

module.exports = server
