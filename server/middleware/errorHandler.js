const errorHandler = (error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({ message: "Server Error" });
};

module.exports = errorHandler;
