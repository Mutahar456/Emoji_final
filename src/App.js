// Importing necessary modules from React and react-router-dom
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Switch } from "react-router-dom";

// Importing components for rendering different pages
import HomePage from "./components/HomePage";
import DetailsPage from "./components/DetailsPage";

// Importing Provider for Redux and the store
import { Provider } from "react-redux";
import store from "./Store";

// App component definition
function App() {
  return (
    <>
      {/* Rendering a header */}
      <h1>Welcome To MUTAHAR HASHMI EMOJI HUB </h1>
      <h2>YOU CAN SEE SOME EMOJIS HERE</h2>

      {/* Providing Redux store to the application */}
      <Provider store={store}>
        {/* Setting up the router */}
        <Router>
          {/* Defining different routes */}
          <Routes>
            {/* Route for the home page */}
            <Route exact path="/" element={<HomePage />} />

            {/* Route for the details page with a dynamic categoryId */}
            <Route path="/details/:categoryId" element={<DetailsPage />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

// Exporting the App component as the default export
export default App;
