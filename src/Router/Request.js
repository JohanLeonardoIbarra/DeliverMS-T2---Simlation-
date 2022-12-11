const { Router } = require("express");
const MakeRequest = require("../Controller/Request.js")

const router = Router();

router.post('/', MakeRequest)

module.exports = router;