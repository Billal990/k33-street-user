import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MainLayout from "./layouts/MainLayout";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import { Provider } from "react-redux";
import store from "./store/store";
import { AuthContextProvider } from "./store/AuthContext";
import LoaderProvider from "./provider/LoaderProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
        <LoaderProvider>
          <RouterProvider router={router}>
            <MainLayout />
          </RouterProvider>
        </LoaderProvider>
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
