
const router = require("express").Router()

const { updateUser } = require("../controllers/user.controller")
const { isAuthenticated } = require("../middleware/jwt.middleware")

router.put("/update", isAuthenticated, updateUser)

module.exports = router