export default (err, res):void => {
  const response = {
    code: err.statusCode || 500,
    message: err.message || 'Something went wrong...'
  }

  res.status(response.code)
  res.json({ message: response.message })
  res.end()
}
