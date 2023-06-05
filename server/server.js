const express = require('express')
const session = require('express-session')
const app = express()
const cookieParser = require('cookie-parser')
const InvoiceRouter = require("./routes/InvoiceRouter")
const GeneralRouter = require("./routes/GeneralRouter")
const cors = require('cors')
const morgan = require("morgan");
const {baseUrl} = require('../constants')

const uuid = require("uuid")
const port = 4000
const secret = uuid.v4()

const corsOptions = {
	origin : `${baseUrl.client}`,
	credentials: true
	
}
app.use(cors(corsOptions))
app.use(morgan('dev'))
app.use(cookieParser())
app.use(express.json())
app.use(session({
	secret: secret,
	resave: false,
	name: "session",
	saveUninitialized: false,
	cookie: {
		maxAge: 1000 * 60 * 60,
		sameSite: "lax",
		secure: false,
	}
}))

app.use('/api/invoices',InvoiceRouter)
app.use('/api',GeneralRouter)



app.get('/', (req,res) => {
			res.send("Welcome to our invoice application.")
})

app.listen(port, () => {
	console.log(`Server started on port ${port}`)
})
