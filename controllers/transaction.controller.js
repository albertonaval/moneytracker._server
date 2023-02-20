

const Transaction = require("../models/Transaction.model")

const getTransactionByUser = (req, res, next) => {

    Transaction.find({ owner: req.payload._id })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const newTransaction = (req, res, next) => {

    const { operation, price, description } = req.body

    const { _id: owner } = req.payload

    Transaction.create({ transaction: { operation, price, description }, owner })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const updateTransaction = (req, res, next) => {

    const { id: transaction_id } = req.params
    const newData = req.body

    Transaction.findById(transaction_id)
        .then(data => {
            return Transaction.findByIdAndUpdate(transaction_id, { ...data, ...newData }, { new: true })
        })
        .catch(err => next(err))

}

const deleteTransaction = (req, res, next) => {

    const { id: transaction_id } = req.params

    Transaction.findByIdAndDelete(transaction_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const deleteAllTransactions = (req, res, next) => {

    const { _id: owner } = req.payload

    Transaction.deleteMany({ owner })
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    getTransactionByUser,
    newTransaction,
    updateTransaction,
    deleteTransaction,
    deleteAllTransactions
}