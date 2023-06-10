# cucumber-protractor-typescript
## Project Architecture
This project creates a test suit using typescript, cucumber and protrator as the main frameworks.
Since cucumber is not directly compatible with typescript, it runs the resulting javascript files.
The project uses an page-object architecture, where each page has its own class with its own specific methods.

### File structure
- ```/features``` this file is used to store the feature files containing the cucumber steps
- ```/pages``` this file is used to store classes related to app pages, each app page has its own class
- ```/steps``` this file contains the methods used to connect and manage cucumber
- ```/resources``` this file contains resources, such as the drivers
- ```/utils``` this file contains methods that provide operations and can be used by other parts of the java project
- ```/JSFILES``` this file stores the compiled typescript. It is necessary since protractor only supports javascript.
- ```/node_modules``` used to store the dependencies, as per usual

**Commands**
Here’s  the list of the main commands and what they do:
- npm run webdriver-update: used to update the webdriver manager, downloading multiple dependencies. Only needs to be done once, after installation
- npm run cucumbertest: this command calls ```tsc``` in order to compile the ts files. If successfull, calls protractor in order to run the all ```.features``` files in the ```/feature``` folder

## How to run
This section displays the tools and commands necessary in order to run the test

### Programs necessary
- Node.js
- Git
- VS Code (in order to check ts code base)
- Intel IJ (in order to check java code base)

### Commands
- git clone https://github.com/RyanairLabs/qa-web-challenge-Blaldas.git
- cd ./node/
- npm install		
- npm run webdriver-update
- npm run cucumbertest

## Results
This section contains results and conclusions from this project and tests.

### Proof of concept
In this [video](https://youtu.be/U_rQ0h-kUzk) it is possible to see the test running as expected.

### The test environment
As stated via email, the [ryanair website](https://www.ryanair.com/ie/en) uses very aggressive measures against DDoS attacks.
This forced me to use a VPN in order to run and even create the tests, since 503 errors were constantly showing up and reloading the page wasn't always an option since parts of the app are statefull (breaking the app). 

As it is possible to see in the video, the chrome browser did not close in the end of the video.
This happens because I made changes to the protractor code that allowed me to better see where the test broke during development.
This [link](https://stackoverflow.com/questions/35933945/how-to-stop-automatically-closing-browser-when-writing-protractor-test-cases) can be used in order to do the same.

### Test limitations
Since this project is being used as a demo and not in the real world, there are some limitations to the code due to time constrains.

One of these limmitations is already established above: In a real work environment all ```element.click()``` would be changed by the ```clickElement()``` generic method, as to avoid the explained issues.

Another limitation is present in the seat selection, when children are present.
The current algorithm searches for a plane row, for the rows [18-33], that have (num Children + 1) free seats.
- **Why the rows[18-33]?** When reading the spec I understood that the used seats should be "included seats". The [18-33] value was used as a placeholder before deciding on how to do the algorithm to get the row numbers and I have never changed it since. Deleting it should allow the passengers to sit anywhere.
- **Why the limitation on having (num Children + 1) free seats in a single row?** The rules followed by the website are: the children need to be in the same row as an adult.
In cases where we have 2 adults and 2 children and there aren't three followed seats free in a single row, a perfect algorithm would try to find two free seats twice, however, this is a demo project. The code used in the ```selectOwnSeats()``` method is already complex enough, allowing me to display some algorithmic skill, besided, the time required to implement it would be unreasonabe.

### Conclusions
Since my previous experience was using Selenium with Java, I expect to have missed some details.
As an example, the usual ```/Hook``` file was replaced by an ordinary file ```/TestSettings```. 

The tests are also not perfect. Although the tests run without issues most of the time, occasionally the web app takes a little longer to load some dynamic elements, such as modals, and the tests faill.
The solution for this is simple and already implemented: Add a dynamic wait before using an element.
As an example, in cases where a click fails due to a slower load, the method ```clickElement()```, present in the ```/SeleniumUtils``` file can replace the basic ```element.click()```.

In short, I believe the code presented is solid and shows signs of potencial, specially when taking into account the context of my previous experience.