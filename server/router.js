const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

const url = "https://my-json-server.typicode.com/telegraph/front-end-exercise-contractors/comments";

router.get('/', (req, res) => {
	fetch(url, { method: "Get" })
		.then(res => res.json())
		.then((json) => {
			res.render("home", {
				meta: req.app.get('meta'),
				data: json
			});
		})
		.catch(err => {
			res.render("home", {
				meta: req.app.get('meta'),
				error: err
			});
		});;
	
});

module.exports = router;
