const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
var app = express();

//Add database
const { Pool } = require('pg');
var pool;
pool = new Pool({
    connectionString: process.env.DATABASE_URL
});
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
app.use(express.static(path.join(__dirname, 'public'))); //set static files
// next two lines: to read what server sends
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// SET UP DONE
//------------------------------------------------------------------
// HOMEPAGE
app.get('/', (req, res) => {
    var getUsersQuery = `SELECT * FROM tokimon`; //use backticks
    console.log(getUsersQuery);
    pool.query(getUsersQuery, (error,result)=>{         //send commands to psql, then get error, result from database
        if (error)              //run this function after getting result and error from database
            res.end(error);
        var results = {'rows': result.rows};
        console.log("in get results:", results);
        res.render('pages/homepage',results); //send res(results) to 'pages/homepage'(ejs file), and also send the object called results which are the rows
    });     
});
 // DISPLAY PROFILE
app.post('/profile',(req,res)=>{
    console.log("Profile");
    var sid = req.body.sid;
    console.log(sid);
    console.log("Profile");
    var getProfileQuery = `SELECT * FROM tokimon WHERE id=${sid};`;
    console.log(getProfileQuery);
    pool.query(getProfileQuery, (error, result)=>{
        if (error)
            res.end(error);
        console.log(result);
        var results = {row: result.rows[0]};
        console.log(results);
        res.render('pages/profile.ejs',results);
    });
});
/*
app.get('/users/:id', (req,res)=>{
    console.log(req.params.id);
    SELECT * FROM usertab WHERE id=1; <-- can grab a specific tokimon
    var userIDQuery = `SELECT * ftom usertab WHERE uid= ${req.params.id};`
});
*/

//For submission of forms:
app.post('/newToki', (req,res)=> {
    console.log('Submitted new Toki');
    var total = parseInt(req.body.fly) + parseInt(req.body.fight) + parseInt(req.body.fire) + parseInt(req.body.water) + parseInt(req.body.elect) + parseInt(req.body.ice);
    //access database
    var InsertProfileQuery = `INSERT INTO tokimon (trainer, name, speed, weight, height, fly, fight, fire, water, electric, ice, total) Values('${req.body.trainer}','${req.body.name}',${req.body.speed},${req.body.weight}, ${req.body.height}, ${req.body.fly}, ${req.body.fight}, ${req.body.fire}, ${req.body.water}, ${req.body.elect}, ${req.body.ice}, ${total});`; //use backticks
    console.log(InsertProfileQuery);
    pool.query(InsertProfileQuery);
    return res.redirect('/');
});

//Delete Tokimon
app.post('/delete', (req,res)=> {
    var id = req.body.sid;
    console.log(`Delete toki with id=${id}`);
    //access database
    var DeleteProfileQuery = `DELETE FROM tokimon WHERE tokimon.id= ${id};`;
    console.log(DeleteProfileQuery);
    pool.query(DeleteProfileQuery);
    return res.redirect('/');
    
});


//Edit Profile of Tokimon
/*
app.post('/delete', (req,res)=> {
    console.log(`Delete toki with id=${id}`);
    //access database
    var EditProfileQuery = ``;
    console.log(DeleteProfileQuery);
    pool.query(DeleteProfileQuery);
    return res.redirect('/edit');
});
*/