

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
                    required: true,
                    default: 0
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

transactionSchema.pre("save", function (next) {
    if (!this.transaction || this.transaction.length === 0) {
        this.transaction.push({
            operation: "first operation",
            price: "0",
            description: "description"
        })
    }
    next()
})

module.exports = mongoose.model("Transaction", transactionSchema)