require('dotenv').config()

require('./config/database')
const path = require('path')

const app = require('./app-server')

const PORT = process.env.PORT || 8000

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'indes.html'))
})

app.listen(PORT, () => {
	console.log(`I am listening on ${PORT}. We live baby!`)
} )