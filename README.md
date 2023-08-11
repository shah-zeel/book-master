# Setting up server
### 1. npm package initialization
- run `npm init`
- Keep the default answers to the questions
### 2. Install dependencies
- run `npm i express mongoose body-parser config` 
- it will install the dependencies:
    1. body-parser: Allows us to get the data throughout the request
    2. express: Is our main framework
    3. mongoose: Is used to connect and interact with MongoDB
    4. config: This lets you define default parameters for your application
### 3. Add Nodemon
- run `npm i -D nodemon`
- add `"app": "nodemon app.js"` to <code style="color:red">scripts</code>
 in <code style="color:red">package.json</code>
- add `"start": "node app.js"` to <code style="color:red">scripts</code>
 in <code style="color:red">package.json</code> to define a start script of the app
 
