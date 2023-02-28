# API Weather using Lambdas
## This is an example of api created using aws lambda functions

### Some considerations:
* The MetaWeather service is down, for this reason I used accuWeather https://developer.accuweather.com/
* As the free version has a limited amount of hits, so in order to continue development I added a service response mock located at /test-data/forecast-api-response-mock.json. Which can be used by uncommenting the lines of code and commenting out the two that call the service with axios in api-weather-client.js
* The lambda function is located in: “/lambdas/getWeather.js”, I decided this this way since it seemed more appropriate in case in the future you want to continue adding new lambda functions.



### To execute it you can run:
* serverless deploy
* serverless invoke -f getWeather -l

### To local debugging with vscode: 
* npm install
* copy launch.json in your .vscode folder 
* click on run "Launch Program"
* Enjoy! 
