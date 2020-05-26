module.exports = (res, msg, data, status) => {
  return res.status(+status).send({
    message: msg ? msg : undefined,
    data: data !== [] && data !== null || data !== "" || data !== {} ? data : null
  })
}