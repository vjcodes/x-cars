import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CarListingPage from "./pages/CarListingPage";
import CarDetailsPage from "./pages/CarDetailsPage";
import { Provider } from "react-redux";
import store from "./store";
import BookingFormPage from "./pages/BookingFormPage";
import ConfirmationPage from "./pages/ConfirmationPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <Provider store={store}>
            <LandingPage />
          </Provider>
        }
      />
      <Route
        path="/car-listing"
        element={
          <Provider store={store}>
            <CarListingPage />
          </Provider>
        }
      />
      <Route
        path="/car-details/:carid"
        element={
          <Provider store={store}>
            <CarDetailsPage />
          </Provider>
        }
      />
      <Route
        path="/booking/:carid"
        element={
          <Provider store={store}>
            <BookingFormPage />
          </Provider>
        }
      />
      <Route
        path="/confirm-booking"
        element={
          <Provider store={store}>
            <ConfirmationPage />
          </Provider>
        }
      />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
