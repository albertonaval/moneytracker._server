module.exports = (app) => {
  app.use((req, res, next) => {
    res.status(404).json({ message: "This route does not exist" });
  });

  app.use((err, req, res, next) => {

    if (err.code && err.code === 11000) {
      res.status(409).json({ errorMessages: ["This email is already in the database"] })
    }

    if (err.name === "ValidationError") {
      let errorMessages = Object.values(err.errors).map(elm => elm.message)
      res.status(400).json({ errorMessages })
    }

    console.log("Server Error", err)


    if (!res.headersSent) {
      res.status(500).json({ errorMessages: ["Internal server error. Check the server console."] });
    }
  });
};
