const jwt = require("jsonwebtoken");
const authWare = require("../middleware/authware");
const db = require("../models");


module.exports = function (app) {
	app.post("/api/signup", function (req, res) {
		db.User.create(req.body).then(function (result) {
			res.json({ message: "Vitruv.io account created" });
		}).catch(function (err) {
			res.status(500).json({ error: err.message });
		});
	});

	app.get("/api/users", function (req, res) {
		db.User.find({}).then(function (users) {
			res.json(users);
		});
	});

	
	app.post("/api/authenticate", function (req, res) {
		const { email, password } = req.body;
		db.User.findOne({ email: email }).then(function (dbUser) {
			if (!dbUser) return res.status(401).json({ message: "email or password is incorrect." });
			if (dbUser.comparePassword(password)) {

				const token = jwt.sign({
					data: dbUser._id
				}, "superSecretKey");
				
				res.json({
					id: dbUser._id,
					email: dbUser.email,
					token: token
				});
				
			} else {
				res.status(401).json({ message: "email or password is incorrect." });
			}
		})
	});

	app.get("/api/protected", authWare, function (req, res) {
		const user = req.user;
		res.json({ message: user.email + "authenticated" });
	});
	
	app.get("/api/body", function (req, res) {
		db.Body.find({})
			.then(function (data) {
				res.json(data);
			}).catch(err => {
				res.json(err.message)
			})
	});
	
	app.post("/api/addform", function (req, res) {
		console.log("body", req.body);

		// const { email, name, dob, age, otherProblems, lastPsyProvider, lastPsyVisit, psyMeds, psySuicide, erCount, erLastTime } = req.body;
		db.User.findOneAndUpdate({email: req.body.email}, { form: req.body }).then(function (data) {
			res.json(data)
		}).catch(function (err) {
			res.status(500).json({ error: err.message });
		});
	})

	app.post("/api/deleteform", function (req, res){
		const { email } = req.body;
		db.User.findOneAndUpdate({email: email}, { form: {}}).then(function (data) {
			res.json(data)
		}).catch(function (err) {
			res.status(500).json({ error: err.message });
		});

	app.get("/api/body/:id", function (req, res) {
		let id = req.params.id
		db.Body.find({ _id: id })
		.populate('Symptoms')
		.then(function (data) {
				res.json(data);
			}).catch(err => {
				res.json(err.message)
			})
	});

};