module.exports = app => {

    const userRoutes = require("./user.routes")
    app.use("/api/user", userRoutes)

    const authRoutes = require("./auth.routes")
    app.use("/api/auth", authRoutes)

    const transactionRoutes = require("./transaction.routes")
    app.use("/api/transaction", transactionRoutes)
}