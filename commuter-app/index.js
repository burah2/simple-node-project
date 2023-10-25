// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const routeRoutes = require('./routes/routeRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
// const dotenv = require('dotenv');

// dotenv.config(); // Load environment variables

mongoose.connect("mongodb+srv://isanjenga9:isabella@cluster0.bpnu6bq.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=> console.log("connected to MongoDB"))
.catch((err)=>console.error("Error connecting to MongoDB", err));

const app = express();

app.use(bodyParser.json());

// Register your routes
app.use('/api/users', userRoutes);
app.use('/api/routes', routeRoutes);
app.use('/api/schedules', scheduleRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
