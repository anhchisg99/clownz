import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Mini Blog API',
        description: "API endpoints for a mini blog services documented on swagger",
        contact: {
          name: "Desmond Obisi",
          email: "info@miniblog.com",
          url: "https://github.com/DesmondSanctity/node-js-swagger"
        },
        version: '1.0.0',
      },
      servers: [
        {
          url: "http://localhost:3002/",
          description: "Local server"
        }
      ]
    },
    // looks for configuration in specified directories
    apis: ['./src/index.js'],
  }
const swaggerSpec = swaggerJSDoc(options)

function swaggerDocs(app) {

    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))
}

export default swaggerDocs