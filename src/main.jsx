import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/components/App";
//import { Provider } from "react-redux";
import "modern-normalize";
//import { store } from "./redux/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//==
// import { store, persistor } from "./redux/store";
// import { PersistGate } from "redux-persist/integration/react";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>
// );
