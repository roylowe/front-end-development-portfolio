const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3001

app.use(
  cors({
    origin: true,
  })
)

app.use(express.json())

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' })
})

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Name, email, and message are required.',
    })
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailPattern.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid email address.',
    })
  }

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string'
  ) {
    return res.status(400).json({
      success: false,
      error: 'Name, email, and message must be text values.',
    })
  }

  const contactMessage = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    receivedAt: new Date().toISOString(),
  }

  if (!contactMessage.name || !contactMessage.email || !contactMessage.message) {
    return res.status(400).json({
      success: false,
      error: 'Name, email, and message cannot be empty.',
    })
  }

  console.log('New contact form submission:')
  console.log(contactMessage)

  return res.status(201).json({
    success: true,
    message: 'Your message has been received successfully.',
  })
})

app.use((err, req, res, next) => {
  console.error(err)

  res.status(500).json({
    success: false,
    error: 'Internal server error.',
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
