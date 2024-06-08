import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// iniatl state
const initalState = {
  transactions: [],
};

// Global context
export const GlobalContext = createContext(initalState);

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);

  function deletTransaction(id) {
    dispatch({
      type: "DELETE_TRANS",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANS",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deletTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
