import swaggerJSDoc from 'swagger-jsdoc';
import { version } from './package.json';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Pernilongo API',
      version,
      description: 'API para acompanhamento de atividades físicas',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de desenvolvimento',
      },
    ],
    components: {
      schemas: {
        User: {
          type: 'object',
          required: ['name'],
          properties: {
            id: {
              type: 'integer',
              description: 'ID do usuário',
            },
            name: {
              type: 'string',
              description: 'Nome do usuário',
            },
          },
        },
        Activity: {
          type: 'object',
          required: ['userId', 'type', 'distance', 'time'],
          properties: {
            id: {
              type: 'integer',
              description: 'ID da atividade',
            },
            userId: {
              type: 'integer',
              description: 'ID do usuário',
            },
            type: {
              type: 'string',
              description: 'Tipo da atividade',
              enum: ['RUN', 'BIKE', 'SWIM', 'WALK', 'HIKE'],
            },
            distance: {
              type: 'number',
              description: 'Distância percorrida em km',
            },
            time: {
              type: 'number',
              description: 'Tempo de atividade em minutos',
            },
          },
        },
      },
    },
  },
  apis: ['./src/router/*.ts', './src/controllers/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec; 