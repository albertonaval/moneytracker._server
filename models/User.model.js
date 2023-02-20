const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: [true, 'Email must be in lowercase']
    },
    password: {
      type: String,
      required: true,
      minlength: [5, 'Password must have at least 6 characters']
    },
  },
  {
    timestamps: true
  }
)


userSchema.pre('save', function (next) {

  const saltRounds = 10
  const salt = bcrypt.genSaltSync(saltRounds)
  const hashedPassword = bcrypt.hashSync(this.password, salt)
  this.password = hashedPassword
  next()
})


userSchema.methods.validatePassword = function (candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.password)
}

userSchema.methods.signToken = function () {
  const { username, email, _id } = this
  const payload = { username, email, _id }

  const authToken = jwt.sign(
    payload,
    process.env.TOKEN_SECRET,
    { algorithm: 'HS256', expiresIn: "24h" }
  )
  return (authToken)
}

module.exports = mongoose.model("User", userSchema)