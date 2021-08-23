const MessagingResponse = require('twilio').twiml.MessagingResponse

module.exports = (req, res) => {
  const { body } = req
  console.log('New Twilio Webhook has been called', body)

  const WAID = process.env.WAID

  const isDeveloperWaId = body.WaId === WAID

  const twiml = new MessagingResponse()
  twiml.message(`${isDeveloperWaId ? '🚀' : '👋'} You said: "${body.Body}"? 🤔`)

  res.setHeader('Content-Type', 'text/xml')
  return res.send(twiml.toString(),)
}
