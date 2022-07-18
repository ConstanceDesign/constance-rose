const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://192.168.0.15:3000/mernshopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
