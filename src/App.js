import React from 'react';
import { Provider } from "react-redux";
import store from "./store";
import List from './components/List';
import Input from './components/Input';
const App = () => (
  <Provider store={store}>
    <h2>Todos</h2>
    <Input/>
    <List />
  </Provider>
);

export default App;