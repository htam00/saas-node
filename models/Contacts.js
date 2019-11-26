const mongoose = require('mongoose')

const Schema = mongoose.Schema
const Contacts = new Schema({
	name: String,
	email: String
})

module.exports = mongoose.model('Contacts', Contacts)
