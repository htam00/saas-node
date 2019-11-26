const express = require('express')
const hash = require('object-hash')
const router = express.Router()
const Users = require('./models/Users')
const Contacts = require('./models/Contacts')

const title = "Sano"
router.get('/', (req, res, next) => {
        res.render('index', {title: title})
        
})


router.post('/signup', (req, res, next) => {
	Users.findOne({
		email: req.body.email
	}, (err, user) => {
		if(err) return next(err)
		if(user) return next({
			message: "User already exists"
		})
        	let newUser = new Users({
			name: req.body.name,
			email: req.body.email,
			password: hash.sha1(req.body.password)
		})
		newUser.save(err => { 
			if(!err) console.log("User Salved")
		})
	})
	res.send(`<p>${req.body.name}</p>`)
})

router.get('/signup', (req,res) => {
	res.render('signup', {title: title})
})

router.get('/blog', (req, res) => {                                   res.render('blog', {title: title})
})

router.get('/contact', (req, res) => {
        res.render('contact', {title: title})
})

router.post('/contact', (req, res) => {
	let newContacts = new Contacts({
		name: req.body.name,
		email: req.body.email
	})
	newContacts.save()

        res.send(`Thank's you ${req.body.name}, send email for ${req.body.email}`)
})

module.exports = router
