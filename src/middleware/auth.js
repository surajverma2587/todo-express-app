const auth = (req, res, next) => {
  const { headers } = req;

  if (headers["api-key"] !== "foobar") {
    return res.status(401).send({ message: "Unauthorized access" });
  }

  next();
};

module.exports = { auth };
