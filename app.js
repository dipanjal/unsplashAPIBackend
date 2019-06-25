const express = require('express'),
	bodyParser = require('body-parser');
const app = express();
const server = require('http').createServer(app);
const port = 3030;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/view.html');
});

app.use('/api',require('./UnsplashApiController'));

server.listen(port, () => {
	console.log(`listening: ${port}`);
});
