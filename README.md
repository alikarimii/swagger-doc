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

2. after modified `api/swagger/swagger.yaml` and put your api path in there

   ```
   npm run build
   ```

3. start
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
   npm i
   docker build -t imageNameYouWant .
   ```
2. run image
   ```
   docker run -d -p 3000:3000 imageNameYouWant
   ```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
