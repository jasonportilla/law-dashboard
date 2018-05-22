const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');

//DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db)
.then(() => {
  console.log('MongoDB connected');
})
.catch(err => console.log(err));
  

app.get('/', (req, res) => {
  res.json({ message: "hi"});
});

app.use('/api/users', users);
app.use('/api/profile', profile);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
})