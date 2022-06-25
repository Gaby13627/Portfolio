const express = require('express')
const app = express()

// !important!
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express

app.use(express.static(__dirname + '/dist/portfolio'))

app.get('/*' , (req , res)=>{

   res.sendFile(__dirname + '/dist/portfolio/index.html')

})


app.listen(process.env.PORT || 8080)
