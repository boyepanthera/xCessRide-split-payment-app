import request from 'request';
import passKeys from './config';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
const port =  process.env.PORT;
const router = express();
dotenv.config();
router.use(express.static(__dirname + "/public"));
router.use(bodyParser.urlencoded({
    extended: true
}));

console.log(passKeys);
router.set('view engine', 'ejs');

router.get('/' , (req, res) => {
    res.render('index', {passKeys});
});

const server = router.listen (port, process.env.IP, (req, res) => {
    console.log('xCess-ride app started on port ' + port);
});
