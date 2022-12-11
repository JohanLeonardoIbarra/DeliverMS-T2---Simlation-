const MakeRequest = (req, res) => {
  const { user, product, quantity } = req.body;

  const estimatedDate = new Date();
  estimatedDate.setMonth(estimatedDate.getMonth() + 1)

  return res.send(
    {
      message: `Resparto programado para el ${estimatedDate}`
    }
  )
}

module.exports = MakeRequest;