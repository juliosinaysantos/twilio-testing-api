import React, { useState } from 'react'

function App() {

  const [message, setMessage] = useState('')

  const handlePingClick = async () => {
    const response = await fetch('/api/ping')
    const data = await response.json()
    setMessage(data.message)
  }

  return (
    <>
      <h1>Testing Twilio API and Twilio Webhooks</h1>
      <button type="button" onClick={handlePingClick}>Let's ping</button>
      <p>{message}</p>
    </>
  )
}

export default App
