const express = require('express')
const app = express()
const cors = require('cors')
const models = require('./models')
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
app.post('/add-user',(req,res) => {
    // Get the input variables from the results page
    console.log(req.body)
    let phoneNumber = req.body.state.phoneNumber
    let Case = req.body.state.Case
    let Cooler = req.body.state.Cooler
    let HDD = req.body.state.HDD
    let Headphones = req.body.state.Headphones
    let SSD = req.body.state.SSD
    let Fan = req.body.state.Fan
    let PSU = req.body.state.PSU
    let Prebuilt = req.body.state.Prebuilt
    let cpuCooler = req.body.state.cpuCooler
    let Webcam = req.body.state.Webcam
    let Controller = req.body.state.Controller
    let Laptop = req.body.state.Laptop
    let Monitor = req.body.state.Monitor
    let VR = req.body.state.VR
    let RAM = req.body.state.RAM
    let Headset = req.body.state.Headset
    let OpticalDrive = req.body.state.OpticalDrive
    let CPU = req.body.state.CPU
    let OS = req.body.state.OS
    let Motherboard = req.body.state.Motherboard
    let Speakers = req.body.state.Speakers
    let Keyboard = req.body.state.Keyboard
    let Networking = req.body.state.Networking
    let Furniture = req.body.state.Furniture
    let GPU = req.body.state.GPU
    let Mouse = req.body.state.Mouse
    let Processor = req.body.state.Processor
    let HomeTheaterPC = req.body.state.HomeTheaterPC
    let Cables = req.body.state.Cables
    let flashDrive = req.body.state.flashDrive
    let Router = req.body.state.Router
    let Mic = req.body.state.Mic


    //create variable that holds an object
    let user = models.User.build({
        phoneNumber: phoneNumber,
        case: Case,
        cooler: Cooler,
        hdd: HDD,
        headphones: Headphones,
        ssd: SSD,
        fan: Fan,
        psu: PSU,
        prebuilt: Prebuilt,
        cpucooler: cpuCooler,
        webcam: Webcam,
        controller: Controller,
        laptop: Laptop,
        monitor: Monitor,
        vr: VR,
        ram: RAM,
        headset: Headset,
        opticaldrive: OpticalDrive,
        cpu: CPU,
        os: OS,
        motherboard: Motherboard,
        speakers: Speakers,
        keyboard: Keyboard,
        networking: Networking,
        furniture: Furniture,
        gpu: GPU,
        mouse: Mouse,
        processor: Processor,
        hometheaterpc: HomeTheaterPC,
        cables: Cables,
        flashdrive: flashDrive,
        router: Router,
        mic: Mic,
      })
    //save the new variable to the table
    user.save().then((savedUser) => {
      // console.log(savedUser)
    })
    .then(() => {
      //success message
      console.log("Data saved!")
    }).catch(error => console.log(error))
})

//****************RETRIEVE DATABASE****************
let userPhoneNumbers = null

function retrieveDatabase(){
    models.User.findAll().then(function(usersArray){
        userPhoneNumbers = usersArray;
        return userPhoneNumbers;
      }).then(() => checkPosts())
}

retrieveDatabase()

//****************RETRIEVE POSTS FROM REDDIT API****************
function getBAPCSposts(){
    let url = 'https://www.reddit.com/r/buildapcsales/new.json?limit=25'
    fetch(url)
    .then(response => response.json()).then(json => {
      // console.log(json)
      return json
    }).then((json) => {
        let postItems = json.data.children.map((post) => {

            return (
                post.data.title
            )
        })
        return postItems
    }).then((postItems) => {
        // console.log(postItems)
    }) 
}

//****************CHECK DATA AND SEND TEXT****************

function checkPosts() {
  let processedUsers = userPhoneNumbers.map((user) => {
    // console.log('keys', Object.keys(user.dataValues))
    return {
      id: user.id,
      phoneNumber: user.phoneNumber, 
      searchParams: Object.keys(user.dataValues).filter((key) => {
        // console.log(key)
        // console.log(user[key])
        return user[key] == true
      })
    }
  }) 
  console.log(processedUsers)
}



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

//****************DELETE NUMBER****************
app.post('/delete-number',(req,res) => {
    let phoneNumber = req.body.phoneNumber
    console.log("HEY OVER HERE")
    models.User.destroy({
      where: {
        phoneNumber: phoneNumber
      }
    }).then(() => {
      res.json({success: true, message: "NUMBER ELIMINATED"})
    })
})

app.listen(1010,() => {
console.log('Server sure is humming!')
})