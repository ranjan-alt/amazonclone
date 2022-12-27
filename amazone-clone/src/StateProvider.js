//this will act as a data layer and we can use this data in checkout page , in header basket , and also update product in checkout
import React, { createContext, useContext, useReducer } from "react";
// question -- what is context api
// context provides data to pass through component without passing props manually at every level

// step 1 - prepare the data layer
export const StateContext = createContext(); // this preapres the datalayer

//step-2  wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => {
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>;
};

//step-3 pull info from the data layer
export const useStateValue = () => useContext(StateContext);
