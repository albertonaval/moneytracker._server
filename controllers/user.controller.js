

const User = require("../models/User.model")

const updateUser = (req, res, next) => {
    const { _id } = req.payload
    const { email, username } = req.body

    User.findByIdAndUpdate(_id, { email, username }, { new: true })
        .then(response => response.json(response))
        .catch(err => next(err))

}

module.exports = { updateUser }