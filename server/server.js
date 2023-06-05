const express = require('express')
const session = require('express-session')
const app = express()
// const cookieParser = require('cookie-parser')
const InvoiceRouter = require("./routes/InvoiceRouter")
const GeneralRouter = require("./routes/GeneralRouter")
const cors = require('cors')
const morgan = require("morgan");
const port = 4000
app.use(cors())
app.use(morgan('dev'))
// app.use(cookieParser())
app.use(express.json())
app.use(session({
	secret: 'your_secret_key',
	resave: true,
	saveUninitialized: true
}))

app.use('/api/invoices',InvoiceRouter)
app.use('/api',GeneralRouter)

app.get('/', (req,res) => {
			res.send("Welcome to our invoice application.")
})

app.listen(port, () => {
	console.log(`Server started on port ${port}`)
})
