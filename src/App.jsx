import React from "react";
import "./App.css";

// Components
import { Header } from "./components/Header";
import { Balence } from "./components/Balence";
import { IncomeExpence } from "./components/IncomeExpence";
import { TransactionList } from "./components/TransactionList";
import { AddNTransaction } from "./components/AddNTransction";

// State Management
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balence />
        <IncomeExpence />
        <TransactionList />
        <AddNTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
