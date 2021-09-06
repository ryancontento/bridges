import express from 'express'
import routes from './routes'

const app = express()

app.use(routes)

app.listen(4000, () => {
  console.log('Server started on port 4000')
})
