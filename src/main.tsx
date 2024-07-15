import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./modules";
import { BrowserRouter } from "react-router-dom";

const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
