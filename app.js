const express = require("express")
const cors = require("cors")
const path = require("path")
const moongose = require("mongoose")
const expressLayouts = require("express-ejs-layouts")
const bodyParser = require('body-parser')

//db config
const db = require('./config/keys').MongoURI

//connect
moongose.connect(db, { useNewUrlParser:false })
.then(() => console.log('mongoDB connected'))
.catch(err => console.log(err))
//app
const app = express()

//set routes
// const index = require("./routes/index")
const pages = require("./routes/pages")
const user = require("./routes/users")

//set a public directory
app.use(express.static(path.join(__dirname, "/public")))
app.use(express.static(path.join(__dirname,"sass")))

app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
//body parser midleware
app.use(express.json())
app.use(bodyParser.urlencoded({ extended:false }))

app.use(expressLayouts);
app.set('view engine', 'ejs');

//cors
app.use(cors())
app.use("/users", user)
app.use("/pages", pages)
// app.use("/", index)

// app.get('/', (req, res)=>{
//     res.render('index')
// })

//port
const port = 3001

//server
app.listen(port, () => console.log(`server running on ${port}`))