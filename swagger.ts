// swagger.ts
import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Pernilongo API',
    description: 'Acompanhamento de atividades',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./index.ts'];

swaggerAutogen()(outputFile, endpointsFiles, doc);