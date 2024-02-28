const express = require('express');
const cors = require('cors');
const app = express();
const dinos = require('./data');

app.use(cors());

app.set('port', process.env.PORT || 3001);

app.locals.title = 'dino-api'

app.locals.dinos = dinos;

app.get('/', (request, response) => {
  response.send('dinosaurs')
})

app.get('/dino', (request, response) => {
  response.json({ dinos });
});


app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

