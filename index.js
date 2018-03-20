const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const firebase = require('firebase')

var config = {
    apiKey: "AIzaSyB4ZZJ34vx3U4f6FV61vmCV89ssmT-oLlU",
    authDomain: "finds-59a20.firebaseapp.com",
    databaseURL: "https://finds-59a20.firebaseio.com",
    projectId: "finds-59a20",
    storageBucket: "finds-59a20.appspot.com",
    messagingSenderId: "441266123097"
  };
  firebase.initializeApp(config);
  var database = firebase.database()
app.use(cors())
app.use(bodyParser.json())
app.get('/', async(req, res) => {
    let provice = []
    await database.ref().once('value').then(snapshot => {
        provice = snapshot.val()
    })
    res.send(provice)
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))