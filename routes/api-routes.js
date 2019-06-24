const jwt = require("jsonwebtoken");
const authWare = require("../middleware/authware");
const db = require("../models");

module.exports = function (app) {
	app.post("/api/signup", function (req, res) {
		db.User.create(req.body).then(function (result) {
			res.json({ message: "Virtuv.io account created" });
		}).catch(function (err) {
			res.status(500).json({ error: err.message });
		});
	});

	app.get("/api/users", function (req,res) {
		db.User.find({}).then(function(users){
			res.json('Hello World');
		});
	});

	app.post("/api/authenticate", function (req, res) {
		const { username, password } = req.body;
		db.User.findOne({ username: username }).then(function (dbUser) {
			if (!dbUser) return res.status(401).json({ message: "Username or password is incorrect." });
			if (dbUser.comparePassword(password)) {

				const token = jwt.sign({
					data: dbUser._id
				}, "superSecretKey");

				res.json({
					id: dbUser._id,
					username: dbUser.username,
					token: token
				});

			} else {
				res.status(401).json({ message: "Username or password is incorrect." });
			}
		})
	});

	app.get("/api/protected", authWare, function (req, res) {
		const user = req.user;
		res.json({ message: user.username + "authenticated" });
	});

	app.get("/api/public", function (req, res) {
		res.json({
			message: "public"
		});
	});
};