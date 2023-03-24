# User Card Grid Layout with React and Styled Components


- This project involves creating a user card grid layout using React and styled components. The user card data is fetched from an external API and displayed in a responsive grid format.

---

## Getting_user

- To get started, you'll need to have Node.js and npm (Node Package Manager) installed on your computer. You can download and install Node.js from the official website: https://nodejs.org/en/

Once you have Node.js and npm installed, you can clone this repository to your local machine and navigate to the project directory.

---

- git clone `https://github.com/sks-7/Getting_user.git`

- cd Getting_user

---

Next, install the project dependencies using yarn.

- `yarn install`

---

## Running the App

- To run the app, use the following command:

`yarn dev`

- This will start the app in development mode and open it in your default browser at http://localhost:3000/

---

## Project Structure

The project has the following file structure:

`Getting_user/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.js
    index.js
    NavBar.js
    UserCard.js
    UserGrid.js`

- `App.js`: The main component that renders the NavBar and UserGrid components.

- `index.js`: The entry point of the app that renders the App component.
- `NavBar.js`: A component that displays the app's navigation bar, including the app name and a "Get Users" button.
- `UserCard.js`: A component that displays a single user card with their name, avatar, and email.
- `UserGrid.js`: A component that fetches user data from an external API and displays it in a grid format using the UserCard component.

## Api Data


---

- The user data for this project is fetched from the ReqRes API. Specifically, we're using the following endpoint to fetch the user data:

`https://reqres.in/api/users?page=1
`

This returns a paginated list of users in JSON format. For this project, we're only using the first page of user data.

----

## Styling

Styling for this project is done using styled components, a CSS-in-JS library that allows you to write CSS directly in your JavaScript code.
