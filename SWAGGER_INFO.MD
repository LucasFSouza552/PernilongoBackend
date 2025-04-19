
# Swagger Documentation

## How to Generate the Swagger Documentation

1. Install the required dependencies:
   ```bash
   npm install swagger-autogen
   ```

2. Create or update the Swagger configuration file (e.g., `swagger.js`) if necessary.

3. Run the following command to generate the `swagger_output.json` file:
   ```bash
   node swagger.js
   ```

4. Start the server and access the Swagger documentation at:
   ```
   http://localhost:3000/api-docs
   ```

For more details, refer to the [Swagger Autogen documentation](https://www.npmjs.com/package/swagger-autogen).
