const mongoose = require('mongoose')

module.exports = mongoose.connect(process.env.DB, {
        useNewUrlParser: true,                                     useUnifiedTopology: true                            }, () => console.log('connectDB...'))
