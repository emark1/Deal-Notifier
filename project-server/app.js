const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
// const models = require('./models')
const jwt = require('jsonwebtoken')
const fetch = require("node-fetch");

//Twilio requirements:
const accountSid = 'AC8b1177363239e945df9055f139c63443';
const authToken = '5d1da33a329f294f71ad443b73df8140';
const client = require('twilio')(accountSid, authToken);

//We need cors so the browser will allow us to interact between sites, otherwise it will flag as a security risk
app.use(cors())
//Body parser to read the body of received json
app.use(bodyParser.json())


//****************ADD DEAL TERM TO DATABASE****************
app.post('/add-item',(req,res) => {
    // Get the input variables from the results page
    let item = req.body.name

    //create variable that holds an object
    let card = models.Card.build({
        item: item,
      })
    //save the new variable to the table
    card.save().then((savedCard) => {
      console.log(savedCard)
    })
    .then(() => {
      //success message
      console.log("Card saved!")
    }).catch(error => console.log(error))
})

//****************RETRIEVE POSTS FROM REDDIT API****************
function getBAPCSposts(){
    let url = 'https://www.reddit.com/r/buildapcsales/new.json?limit=25'
    fetch(url)
    .then(response => response.json()).then(json => {
      console.log(json)
      return json
    }).then((json) => {
        let postItems = json.data.children.map((post) => {

            return (
                post.data.title
            )
        })
        return postItems
    }).then((postItems) => {
        console.log(postItems)
    }) 
}

//****************SEND TEXT****************
//Sends a text message with Twilio:
// client.messages.create({
//      body: 'Test text: HELLO WORLD',
//      from: '+15072487456',
//      to: '+15072763034'
//     //  to: '+16514926445'
//    })
//   .then(message => console.log(message.sid));

// setInterval(function(){ getBAPCSposts() },5000);
getBAPCSposts()

//****************LOGIN & AUTHENTICATION****************
const users = [
    {username: 'eric', password: 'eric'}
  ]

app.post('/login',(req, res) => {
    let username = req.body.usernameç
    let password = req.body.password
    let user =  users.find((user) => {
        return user.username == username && user.password == password
    })

    if(user) {
        // user exists and have correct password

        jwt.sign({ username: username }, 'pinkflamingo', function(err, token) {
            if(token) {
            res.json({token: token})
            } else {
            res.status(500).json({message: 'Can\t do that token bud'})
            }
        });
    }
})

function authentication(req,res,next) {
    let headers = req.headers["authorization"]
    let token = headers.split(' ')[1]
  
    jwt.verify(token,'pinkflamingo',(err,decoded) => {
      if(decoded) {
        if(decoded) {
        next()
      } else {
        res.status(401).json({messages: 'Bad token bud'})
      }
    } else {
      res.status(401).json({messages: 'Bad token bud'})
    }
    })
  }

app.listen(1010,() => {
console.log('Server sure is humming!')
})