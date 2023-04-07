const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const PORT = process.env.PORT || 9000

const init = async () => {
  const server = Hapi.server({
    port: PORT,
    host: 'azmi-bookshelf-api.herokuapp.com',
    routes: {
      cors: {
        origin: ['*']
      }
    }
  })

  server.route(routes)

  await server.start()
  console.log(`Server berjalan pada ${server.info.uri}`)
}

init()
