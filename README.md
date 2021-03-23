## Notes

### Date
Mar 22, 2021 

### Location of deployed application
If applicable, please provide the url where we can find and interact with your running application.

### Time spent
12 hours

### Assumptions made
-App client: Max Wu
-Language: English
-Operation system: iOS Big Sur 11.1
-Browser to test on: Chrome
-Design is provided
-MAX/MIN temperature is obtained by comparing all data points within the day (between available 3-hr data points starting from midnight)
-Interface does not supports dark mode
-Call to API using 'city id' as param to avoid getting inaccurate info for duplicate city names
-Temperature,distance in metric is preferred (setting for switching is another feature)
-Logic for aggregating data from 8 points within a day is take every property from the data point with max temperature, except for property temp_min it's taken from the data point with lowest temp_min value 
-When data contain points from 6 days, first day is removed from data array
-Search for city will not start until 3rd character has been typed in on the search field
-Responsiveness: min screen width 420px

### Shortcuts/Compromises made
-Did not spend too much time on design just wireframe, went with super minimal design, color, icon just found on the fly
-Spend more time figuring out a better way to aggregate the data, instead just went with data point with highest temperature for most properties
-could have gone to the extra mile of min screen 360px but really have spent too much time already
-Not sure there's enough information being displayed, went with first thing found on WeatherNetwork
-Used Material UI didn't want to spend too much time styling

### Stretch goals attempted
-Exlorer feature: search implemented
-Responsiveness: added some styles to make it fit most screen sizes
Went well:
-learning NextJS
-deploy on Vercel
-styling turned out to be less hectic 
Can be better:
-Material UI doesn't work smoothly with NextJS, ended up having to include _app and _document
-Wish their API documentation is more detailed and easy to read
-It would be nice to have a proper province name, not available from the .json found on their website
-Did not want to experiment with NextJS at first so ended up having to create two functional projects, one just react, the other with NextJS, spent additional time learning NextJS which increased time spent on the project overall

### Instructions to run assignment locally
npm run dev

### What did you not include in your solution that you want us to know about?
-design decision regarding having a 'search' button or not, for most people it's second nature to click 'enter' but not 100% for all people
-considered adding more features like index for cities where all are available but might not be so valuable
-might have been a perfect chance to try out graphQL but consider how much time has been spent on learning NextJS, did not want to go that far
-did NOT implement any unit test
-nicer loading screen when going from city list to single weather page
-A nicer Not-found page

### Other information about your submission that you feel it's important that we know if applicable.
### Your feedback on this technical challenge
Great chanellge overall! Probably can really find out depth of skills. Personally prefer a code review challenge because feels like such an open assignment which I can easily get carried away and end up spending more than 4-6 hours doing this. Still overall a good experience, even got to do some design work, can also be a great potential portfolio piece after further polish. 
