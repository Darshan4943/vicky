import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./Store";
import Count from "./Count";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Count />
      </div>
    </Provider>
  );
}