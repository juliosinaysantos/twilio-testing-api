const MessagingResponse = require('twilio').twiml.MessagingResponse

module.exports = (req, res) => {
  const { body } = req
  console.log('New Twilio Webhook has been called', body)

  const twiml = new MessagingResponse()
  twiml.message('You said: "' + body.Body + '"? 🤔')

  res.setHeader('Content-Type', 'text/xml')
  return res.send(twiml.toString(),)
}
