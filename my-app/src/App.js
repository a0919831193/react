import { useState, useReducer, useContext, createContext } from "react";
import "./App.css";
import Home from "./component/index";
import Loading from "./component/pages/page1";
import { initialState, reducer } from "./state";



export const AppContext = createContext();

// import { HashRouter } from "react-router-dom";

function App(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {page} = state;

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className="App">{page? <Home /> : <Loading />}</div>
    </AppContext.Provider>
  );
}

export default App;
