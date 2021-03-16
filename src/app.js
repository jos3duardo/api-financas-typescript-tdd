const app = require('express')();

app.get('/', (req, res) => {
   res.status(200).send();
});

app.get('/users', (req, res) => {
   const users = [
      {name: 'Jhon Doe', mail: 'jhon@mail.com'},
   ]
   res.status(200).json(users)
})

module.exports = app;