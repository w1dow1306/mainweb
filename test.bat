@echo off
echo hello world
echo Version of nodejs 
npm --version
clear
echo Just press ender and continue pressing enter

npm init
npm install express
npm install nodemon
clear
echo running the server
nodemon server.js