const express = require('express')
const router = require('./Router/Request')

const app = express()
const port = 8083

app.use(express.json())

app.use('/request', router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))