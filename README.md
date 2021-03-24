## Notes

### Date
Mar 23, 2021 

### Location of deployed application
https://weather-pro.vercel.app/

### Time spent
12 hours

### Assumptions made
-client: Max Wu
-language: English
-operation system: iOS Big Sur 11.1
-browser to test on: Chrome
-design is provided
-interface does not supports dark mode
-call to API using 'city id' instead of 'name'
-temperature, distance in metric is preferred (setting for switching is another feature)
-logic for aggregating data from 8 points within a day is take every property from the data point with max temperature, except for property temp_min it's taken from the data point with lowest temp_min value 
-when data contain points from 6 days, first day should be removed from data array
-search for city will not start until 3rd character has been typed in on the search field
-responsiveness: min screen width is 370px

### Shortcuts/Compromises made
-did not spend too much time on design just wireframe, went with super minimal design, color, icon just found on the fly
-spend more time figuring out a better way to aggregate the data, instead just went with data point with highest temperature for most properties
-could have gone to the extra mile of min screen 360px but really have spent too much time already
-not sure there's enough information being displayed, went with first thing found on WeatherNetwork
-used Material UI didn't want to spend too much time styling

### Stretch goals attempted
-Exlorer feature: search implemented
-Responsiveness: added some styles to make it fit most screen sizes
Went well:
-learning NextJS
-deploy on Vercel
-styling turned out to be less hectic 
Can be better:
-material UI doesn't work smoothly with NextJS, ended up having to include _app and _document
-wish weather API documentation is more detailed and easy to read
-it would be nice to have a proper province name, not available from the .json found on their website
-did not want to experiment with NextJS at first so ended up having to create two projects, one just react, the other with NextJS, spent additional time learning NextJS which increased time spent on the project overall

### Instructions to run assignment locally
npm run build
npm start

### What did you not include in your solution that you want us to know about?
-design decision regarding having a 'search' button or not, ended up not having one but would like to include it
-might have been a perfect chance to try out graphQL but consider how much time has been spent on learning NextJS, did not want to go that far
-did NOT implement any unit test
-nicer loading screen when going from city list to single weather page
-nicer Not-found page
-arrow key down event for search dropdown would be useful

### Other information about your submission that you feel it's important that we know if applicable.
### Your feedback on this technical challenge
Great chanellge overall. Probably can really find out depth of skills. Personally prefer a code review challenge because feels like it's such an open assignment which I can easily get carried away and I did end up spending more than 4-6 hours, probably my own fault for wanting to experiment a bit. Still overall a good experience, even got to do some design work, can also be a great potential portfolio piece after further polish. 
