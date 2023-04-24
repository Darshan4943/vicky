import * as React from "react";
import './App.css'
import Todo from "./Todo";
import { Provider } from "react-redux";
import { store } from "./Store";
import Count from "./Count";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        
        <Todo />
       
        <Count />
      </div>
    </Provider>
  );
}