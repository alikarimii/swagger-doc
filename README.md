# Swagger api doc served by express

A Completed Project to create doc for your api

## Usage

for development purpose Do step by step:

1. clone

   ```
   git clone https://github.com/alikarimii/swagger-doc.git
   cd swagger-doc
   npm i
   ```

2. first of all add `.env` file in root of project and put config in there

   ```
   ## env file
   PORT=3000
   CORS_ORIGIN=your site url
   ```

3. after modified `api/swagger/swagger.yaml` and put your api path in there

   ```
   npm run build
   ```

4. start
   ```
   npm start
   ## Node.js API server is listening on port 3000
   ```
   you can use `build` folder to served in server

## Docker

1. build image
   ```
   git clone https://github.com/alikarimii/swagger-doc.git
   cd swagger-doc
   add env file
   chmod 710 build.sh
   ./build
   ```
2. run image
   ```
   chmod 710 start.sh
   ./start
   ```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
