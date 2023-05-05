const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

require('dotenv').config()

app.use(express.json())
app.use(cors())


app.use('/api/', require('./routes/apiRoutes'))

app.listen(process.env.PORT, () => {
    console.clear()
    console.log('[server] successfully started')
})

mongoose.connect(process.env.MONGO_DB)
.then(() => {
    console.log('[db] successfully connected')
})
.catch((err) => {
    console.warn('[db] error occured: ', err)
})