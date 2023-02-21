

const mongoose = require("mongoose")

const transactionSchema = new mongoose.Schema(
    {
        transaction: [
            {
                operation: {
                    type: String,
                    required: false
                },
                price: {
                    type: Number,
                    default: 0,
                    required: true
                },
                description: {
                    type: String,
                    required: false
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

transactionSchema.pre("save", function (next) {
    if (!this.transaction || this.transaction.length === 0) {
        this.transaction.push({
            price: "0"
        })
    }
    next()
})

module.exports = mongoose.model("Transaction", transactionSchema)