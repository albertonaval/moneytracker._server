

const mongoose = require("mongoose")

const transactionSchema = new mongoose.Schema(
    {
        transaction: [
            {
                operation: {
                    type: String,

                },
                price: {
                    type: Number,
                    required: true,
                    default: 0
                },
                description: {
                    type: String,

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