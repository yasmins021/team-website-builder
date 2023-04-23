## Team Roster Generator
This is a command-line application that generates an HTML file displaying your team's basic information. The purpose of this application is to give managers quick access to their team's emails and GitHub profiles.

## Acceptance Criteria
Given a command-line application that accepts user input:
When prompted for team members and their information, an HTML file is generated that displays a nicely formatted team roster based on user input.
When clicking on an email address in the HTML, the default email program opens and populates the TO field of the email with the address.
When clicking on the GitHub username, the corresponding GitHub profile opens in a new tab.
When starting the application, the user is prompted to enter the team manager's name, employee ID, email address, and office number.
When entering the team manager's information, the user is presented with a menu that offers the option to add an engineer, add an intern, or finish building the team.
When selecting the engineer option, the user is prompted to enter the engineer's name, ID, email, and GitHub username, and is taken back to the menu.
When selecting the intern option, the user is prompted to enter the intern's name, ID, email, and school, and is taken back to the menu.
When deciding to finish building the team, the application exits, and the HTML file is generated.
Usage
To use this application, you need to have Node.js installed on your computer. Once you have Node.js installed, follow the steps below:

Clone this repository to your local machine.
Open a terminal window and navigate to the cloned repository.
Run npm install to install the required dependencies.
Run node app.js to start the application.
Follow the prompts to enter your team's information.
Once you have finished building your team, an HTML file named "team.html" will be generated in the "output" folder. Open this file to view your team roster.
Dependencies
This application requires the following dependencies:

Inquirer.js
Jest
These dependencies will be installed when you run npm install.

## Tests
This application has been thoroughly tested using Jest. To run the tests, run npm test in the terminal.
## walkthrough video
https://www.loom.com/share/fd491c4b1ab34a8bbf37bb06a6f279fc
