module.exports = (err, req, res, next) => {
  res.status(500).json({ message: `Server internal error ${err.message}` })
}