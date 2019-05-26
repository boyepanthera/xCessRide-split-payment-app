import passKeys from './config';
import express from 'express';
const port = process.env.PORT || 4040 ;
const app = express();
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');

app.get('/' , (req, res) => {
    res.render('index', {passKeys});
});

const server = app.listen (port, process.env.IP, (req, res) => {
    console.log('xCess-ride app started on port ' + port);
});
