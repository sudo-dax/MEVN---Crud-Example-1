import express from 'express'
import cors from 'cors'
import './src/config'
import User from './src/routes/user'

// import * as dotenv from 'dotenv'

if (process.env.NODE_ENV !== "production") {
    require('dotenv').config({path: `./${process.env.NODE_ENV}.env`}) || 4000 
}
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use('/users', User)
app.listen(process.env.PORT)
