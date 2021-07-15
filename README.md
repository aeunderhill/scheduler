# Interview Scheduler

## Project Description:

- Interview Scheduler is a SPA that allows you to book and keep track of an interview schedule.

- This App utilizes a React framework with custom hooks that allow users to easily add, edit, or delete appointments at the click of a button.

- Data is accessible through both an API server and a local PostgreSQL database set up.

- Thorough testing framework developed to ensure all components are acting apprpriately.

- Components tested in isolation as well as end to end testing with Cypress


## Project Features:

- Appointment days of the week are displayed and colour coded depending on availability.

- The days each show a number of spots available, that will update as interviews are added or deleted.

- Users can switch between days and see each schedule for that particular day.

- Users can book interviews by typing in a name and selecting an interviewer from a list.

- Can edit already booked appointments with either a new interviewee or interviewer.

- Can cancel an existing interview and receives confirmation messages before deletion.

- Application live renders as changes are made

## Running Webpack Development Server

- For the full experience, both the client and API server must be run at the same time.

- In order to set up the API server and database, start by forking and cloning the repo at (https://github.com/lighthouse-labs/scheduler-api).

- Follow the instructions outlined in the README.md for the scheduler_api file

- After the database and scheduler-api server are running, start the root project with the command: npm start

## Installation:

```sh
npm install
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Project Stack:

- Front End: React, JSX, HTML, Axios, SASS, Javascript

- Back End: Express, Node.js, PostgreSQL

- Testing: Storybook, Jest, Cypress, React Testing Library, Webpack Dev Server

## Dependencies:

- Axios
- Classnames
- Normalize.css
- React
- React-dom
- React-scripts
- Babel/core
- Storybook/addon-actions
- Storybook/addon-backgrounds
- Storybook/addon-links
- Storybook/addons
- Storybook/react
- Testing-library/jest-dom
- Testing-library/react
- Testing-library/react-hooks
- Babel-loader
- Node-sass
- Prop-types
- React-Test-Renderer
