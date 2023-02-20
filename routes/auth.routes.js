
const router = require("express").Router()


const { signup, login, verify, refreshToken, deleteUser } = require("../controllers/auth.controller")
const { isAuthenticated } = require("../middleware/jwt.middleware")



router.post("/signup", signup)

router.post("/login", login)

router.get("/verify", isAuthenticated, verify)

router.put("/refreshToken", isAuthenticated, refreshToken)

router.delete("/delete/:id", isAuthenticated, deleteUser)

module.exports = router