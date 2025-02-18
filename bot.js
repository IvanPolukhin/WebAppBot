const dotenv = require('dotenv')
const express = require('express')
const path = require('path')
const ngrok = require('ngrok')
const TelegramAPI = require('node-telegram-bot-api')

dotenv.config()
const token = process.env.TELEGRAM_BOT_TOKEN

if (!token) {
  console.error('Telegram bot token is missing!')
  process.exit(1)
}

const bot = new TelegramAPI(token, { polling: true })
const app = express()

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const start = async () => {
  bot.setMyCommands([
    {
      command: '/start',
      description: 'Start the bot and open web app',
    },
  ])

  app.listen(3000, async () => {
    console.log('Server is running on port 3000')
    const publicUrl = await ngrok.connect(3000)
    console.log(`Public URL: ${publicUrl}`)

    bot.on('message', async message => {
      const text = message.text
      const chatId = message.chat.id

      if (text === '/start') {
        return bot.sendMessage(
          chatId,
          'Привет! Хотите открыть WebApp? Нажмите кнопку ниже для открытия.',
          {
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: 'Открыть Web App',
                    web_app: {
                      url: publicUrl,
                    },
                  },
                ],
              ],
            },
          },
        )
      }
    })
  })
}

start()
