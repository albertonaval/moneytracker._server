

const mongoose = require("mongoose")

const transactionSchema = new mongoose.Schema(
    {
        transaction: [
            {
                operation: {
                    type: String,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                },
                description: {
                    type: String,
                    required: false,
                },
            }
        ],
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Transaction", transactionSchema)