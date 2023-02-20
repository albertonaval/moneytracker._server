const router = require("express").Router()

const { getTransactionByUser,
    newTransaction,
    updateTransaction,
    deleteTransaction,
    deleteAllTransactions } = require("../controllers/transaction.controller")

const { isAuthenticated } = require("../middleware/jwt.middleware")


router.get("/", isAuthenticated, getTransactionByUser)

router.post("/new", isAuthenticated, newTransaction)

router.put("/update/:id", isAuthenticated, updateTransaction)

router.delete("/delete/:id", isAuthenticated, deleteTransaction)

router.delete("/deletemany/:id", isAuthenticated, deleteAllTransactions)



module.exports = router


