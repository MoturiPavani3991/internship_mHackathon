var express = require('express');
var app = express();
var cors = require('cors');
var mongodb = require('mongodb');
var bodyParser = require('body-parser')
var MongoClient = mongodb.MongoClient;
var nodemailer = require('nodemailer');
var dburl = "mongodb+srv://chaitanya:chaitanya123@cluster0-avyee.mongodb.net/test?retryWrites=true"
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/hackathondatabase/:id', function (req, res, next) {

  res.json({ msg: 'This is CORS-enabled for all origins!' })

})
//login
app.get('/login', function (req, res) {
  MongoClient.connect(dburl, function (err, db) {
    if (err) throw err;
    var dbo = db.db("hackathondatabase");
    dbo.collection('login').find({ "username": req.query.username }).toArray(function (err, docs) {
      console.log("docs", docs);
      if (err) throw err;
      res.send({ "role": docs[0].role });
      db.close();
    });

  });
});
//inserting data
app.post('/student', function (req, res) {
  console.log("req.body", req.body);
  MongoClient.connect(dburl, function (err, db) {
    if (err) throw err;
    var dbo = db.db("hackathondatabase");
    req.body.isEnable=false;
    //  var studentdetails = {  "teamlead_name": req.body.teamlead_name,  "email":req.body.email, "contact_no": req.body.contact_no,"idea_description":req.body.idea_description };
    dbo.collection('student info').insert(req.body, function (err, result) {
      console.log('inserted')
      res.send("Succesfully inserted");
    });
  });
});
//add teamInfo
app.post('/teamInfo', function (req, res) {
  console.log("req.body", req.body);
  MongoClient.connect(dburl, function (err, db) {
    if (err) throw err;
    var dbo = db.db("hackathondatabase");
    dbo.collection('teamInfo').insert(req.body, function (err, result) {
      console.log('inserted')
      res.send("Succesfully inserted");
    });
  });
});
//add event
app.post('/addevent', function (req, res) {
  console.log("req.body", req.body);
  MongoClient.connect(dburl, function (err, db) {
    if (err) throw err;
    var dbo = db.db("hackathondatabase");
    //  var studentdetails = {  "teamlead_name": req.body.teamlead_name,  "email":req.body.email, "contact_no": req.body.contact_no,"idea_description":req.body.idea_description };
    dbo.collection('events').insert(req.body, function (err, result) {
      console.log('inserted')
      res.send("Succesfully inserted");
    });
  });
});
//add judge
app.post('/addjudge', function (req, res) {
  console.log("add judge");
  console.log("req.body", req.body);
  MongoClient.connect(dburl, function (err, db) {

    if (err) throw err;
    var dbo = db.db("hackathondatabase");
    //  var studentdetails = {  "teamlead_name": req.body.teamlead_name,  "email":req.body.email, "contact_no": req.body.contact_no,"idea_description":req.body.idea_description };
    dbo.collection('judges').insert(req.body, function (err, result) {
      console.log('inserted')
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'moturipavani123@gmail.com',
          pass: '9491495883'
        }
      });

      var mailOptions = {
        from: 'moturipavani123@gmail.com',
        //to: req.query.usermail,
        to: req.body.email,
        subject: 'invitation for hackathon',
        text: 'you have been invited for the miracle hackathon ThankX you!!'
      };

      transporter.sendMail(mailOptions, function (error, data) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + data.response);

          res.send('mail sent sucessfully')
        }
      });
    });
  });
});
//teams info
app.get('/retriveTeamsInfo', function (req, res) {
  MongoClient.connect(dburl, function (err, db) {
    if (err) throw err;
    var dbo = db.db("hackathondatabase");
    dbo.collection('events').find({}).toArray(function (err, docs) {
      console.log("docs", docs);
      if (err) throw err;
      res.send(docs);
      db.close();
    });

  });
});
//team members info
app.get('/retriveteamMembers', function (req, res) {
  console.log(req.query);
  MongoClient.connect(dburl, function (err, db) {
    if (err) throw err;
    var dbo = db.db("hackathondatabase");
    dbo.collection('teamInfo').find({ "teamleadName": req.query.teamleadname }).toArray(function (err, docs) {
      console.log("docs", docs);
      if (err) throw err;
      res.send(docs[0].teamMembers);
      db.close();
    });

  });
});
//add score
app.post('/addScore', function (req, res) {
  console.log("req.body", req.body);
  MongoClient.connect(dburl, function (err, db) {
    if (err) throw err;
    var dbo = db.db("hackathondatabase");
    dbo.collection('finalteam').find({ "teamleadername": req.body.teamleadname }).toArray(function (err, docs) {
      console.log("docs", docs);
      if (err) throw err;
      else {
        docs[0].finalscore = req.body.finalscore
        dbo.collection('scores').insert(docs[0], function (err, result) {
          console.log('inserted')
          res.send("Succesfully inserted");
          db.close()
        });
      }
    });

  });
});
//final result
app.get('/finalresult', function (req, res) {
  MongoClient.connect(dburl, function (err, db) {
    if (err) throw err;
    var dbo = db.db("hackathondatabase");
    dbo.collection('scores').find({}).toArray(function (err, docs) {
      console.log("docs", docs);
      if (err) throw err;
      res.send(docs);
      db.close();
      //// res.send("sucessfully retrived")
      //  db.close();
    });

  });
});
//listout the events
app.get('/eventsList', function (req, res) {
  MongoClient.connect(dburl, function (err, db) {
    if (err) throw err;
    var dbo = db.db("hackathondatabase");
    dbo.collection('events').find({}).toArray(function (err, docs) {
      console.log("docs", docs);
      if (err) throw err;
      res.send(docs);
      db.close();
      //// res.send("sucessfully retrived")
      //  db.close();
    });

  });
});
//retriving single document
app.get('/retrive', function (req, res) {
  var id = req.query.id;

  MongoClient.connect(dburl, function (err, db) {
    if (err) { throw err; }
    var dbo = db.db("hackathondatabase");
    //dbo.collection('student info').find({_id: new mongodb.ObjectID(id)}).toArray(function(err, docs){
    dbo.collection('student info').findOne({ teamlead_name: "lokesh" }, function (err, docs) {
      if (err) throw err;
      res.send(docs);
      db.close();
      res.send("sucessfully retrived")
    });
  });
});
// retrive final teams
app.get('/retriveallfinalteams', function (req, res) {
  MongoClient.connect(dburl, function (err, db) {
    if (err) { throw err; }
    var dbo = db.db("hackathondatabase");
    //dbo.collection('student info').find({_id: new mongodb.ObjectID(id)}).toArray(function(err, docs){
    dbo.collection('finalteam').find({}).toArray(function (err, docs) {
      if (err) throw err;
      res.send(docs);
      db.close();
      //res.send("sucessfully retrived")
    });
  });
});
//insert into final list
app.post('/finalteam', function (req, res) {
  console.log(req.body.teamleadername);
  var data={}
  MongoClient.connect(dburl, function (err, db) {
    if (err) throw err;
    var dbo = db.db("hackathondatabase");
    dbo.collection('student info').find({ "teamleadername": req.body.teamleadername }).toArray(function (err, docs) {
      console.log("docs", docs);
      data=docs[0]
     delete data['_id']; 
      if (err) throw err;
      else {
        dbo.collection("finalteam").insert(data, function (err, result) {
          if (err) throw err;
          console.log("1 document inserted");
          res.send("1 document inserted");
          db.close();
        });
      }

    });

  });
});
app.post('/acceptUpdate', function (req, res) {
  console.log("insidr acceptupdate");
  MongoClient.connect(dburl, function (err, db) {

    if (err) throw err;

    var dbo = db.db("hackathondatabase");

    var myquery = { teamleadername: req.body.teamLeadName };

    var newvalues = { $set: { isEnable: true } };

    dbo.collection("student info").update(myquery, newvalues, function (err, result) {

      if (err) throw err;

      console.log("1 document updated");
      res.send({"res":result})

      db.close();

    });

  });
})

//deleting the record

app.get('/delete', function (req, res) {
  var id = req.query.id;
  MongoClient.connect(dburl, function (err, db) {
    if (err) { throw err; }
    var dbo = db.db("hackathondatabase");
    dbo.collection("student info").deleteOne({ teamlead_name: "lokesh" }, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      res.send("1 document deleted");
      db.close();

    });
  });
});

//retreving all details
app.get('/retriveall', function (req, res) {
  var id = req.query.id;
  MongoClient.connect(dburl, function (err, db) {
    if (err) { throw err; }
    var dbo = db.db("hackathondatabase");
    //dbo.collection('student info').find({_id: new mongodb.ObjectID(id)}).toArray(function(err, docs){
    dbo.collection('student info').find({}).toArray(function (err, docs) {
      if (err) throw err;
      res.send(docs);
      db.close();
      // res.send("sucessfully retrived")
    });
  });
});



//retreving particular column details
app.get('/retriveidea', function (req, res) {
  var id = req.query.id;
  MongoClient.connect(dburl, function (err, db) {
    if (err) { throw err; }
    var dbo = db.db("hackathondatabase");
    //dbo.collection('student info').find({_id: new mongodb.ObjectID(id)}).toArray(function(err, docs){
    // dbo.collection('student info').find({}).toArray(function(err, docs){
    dbo.collection("student info").find({}, { projection: { _id: 0, teamlead_name: 1, email: 1, idea_description: 1 } }).toArray(function (err, docs) {
      if (err) throw err;
      res.send(docs);
      db.close();
    });
  });
});

//inserting data
app.post('/admininsert', function (req, res) {
  console.log("req.body", req.body);
  MongoClient.connect(dburl, function (err, db) {
    if (err) throw err;
    var dbo = db.db("hackathondatabase");
    var hackathondetails = { "data": req.body.data, "venue": req.body.venue, "rules": req.body.rules };
    dbo.collection('hackathondetails').insert(hackathondetails, function (err, result) {
      console.log('inserted')
      res.send("Succesfully inserted");
    });
  });
});

//api for sending mails
app.post("/sendemailToParticipant", function (req, res) {
  //  console.log(req.query.usermail)
  var transporter = nodemailer.createTransport({
    service: 'gmail',

    auth: {
      user: 'moturipavani123@gmail.com',
      pass: '9491495883'
    }
  });

  var mailOptions = {
    from: 'moturipavani123@gmail.com',
    //to: req.query.usermail,
    to: req.body.email,
    subject: 'invitation for hackathon',
    text: 'Your team  have been selected for the Hackathon in Miracle. Thankk you!!'
  };

  transporter.sendMail(mailOptions, function (error, data) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + data.response);

      res.send('mail sent sucessfully')
    }
  });
})
//email for student
app.get("/sendemail", function (req, res) {
  //  console.log(req.query.usermail)
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'moturipavani123@gmail.com',
      pass: '9491495883'
    }
  });

  var mailOptions = {
    // from: 'moturipavani123@gmail.com',
    to: req.query.usermail,
    to: 'pmoturi1@gmail.com',
    subject: 'invitation for hackathon',
    text: 'sir you have been invited for the miracle hackathon Thankk you!!'
  };

  transporter.sendMail(mailOptions, function (error, data) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + data.response);

      res.send('mail sent sucessfully')
    }
  });
})

//search
app.get('/search', function (req, res) {
  var id = req.query.id;
  MongoClient.connect(dburl, function (err, db) {
    if (err) { throw err; }
    var dbo = db.db("hackathondatabase");
    //dbo.collection('student info').find({_id: new mongodb.ObjectID(id)}).toArray(function(err, docs){
    // dbo.collection('student info').find({}).toArray(function(err, docs){
    dbo.collection("student info").find({}, { projection: { _id: 0, teamlead_name: 1, email: 1, idea_description: 1 } }).toArray(function (err, docs) {
      if (err) throw err;
      res.send(docs);
      db.close();
    });
  });
});
app.get('/login', (req, res) => {

  console.log("login api", req.query);

  login({ "username": req.query.username }).then((resp) => {

    console.log("resp", resp);

    res.json({ "role": resp.response[0].role })

  })

});
module.exports = (params) => {




  //  var MongoClient = require('mongodb').MongoClient;

  return new Promise(function (resolve, reject) {

    console.log("inside promise");

    MongoClient.connect(dburl, function (err, client) {

      if (err) {

        console.log(err);

        reject({ response: 'error' });

      }

      var db = client.db("hackathondatabase");

      db.collection("login").find({ 'username': params.username }).toArray(function (err, data) {

        if (err) {

          console.log(err);

        }

        else {

          //console.log('result', data);

          resolve({ response: data });

        }



      })

    });

  })



}

app.listen(3000, () => {
  console.log("Waiting for connections on http://localhost:3000");
})


