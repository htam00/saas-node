const express = require('express')
const hash = require('object-hash')
const router = express.Router()
const Users = require('./models/Users')
const Contacts = require('./models/Contacts')

const title = "Sano"
router.get('/', (req, res, next) => {
        res.render('index', {title: title})
        next()
})


router.post('/', (req, res, next) => {			
        let newUser = new Users({
		name: req.body.name,
		email: req.body.email,
		password: hash.sha1(req.body.password)
	})
	res.send(req.body.name)
	newUser.save()
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
