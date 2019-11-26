const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Users = new Schema({
	id: ObjectId,
	name: String,
	email: String,
	password: String
})

module.exports = mongoose.model('Users', Users)
