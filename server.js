const http = require('http')
const path = require('path')
const PORT = 3030
const server = http.createServer()

async function init() {
  let getPath = path.join(__dirname, 'index.html')
  console.log('---', getPath)
  const res = await fetch(new URL(getPath))
  const page = await res.text()


  server.on('request', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.end(page)
  })

  server.listen(PORT, () => {
    console.log('listening')
  })
}

init()