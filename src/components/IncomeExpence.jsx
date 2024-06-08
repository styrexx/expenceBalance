import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalContext";

export const IncomeExpence = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);

  const plus = amount
    .filter((transaction) => transaction > 0)
    .reduce((prev, curr) => (prev += curr), 0)
    .toFixed(2);

  const minus = (
    amount
      .filter((item) => item < 0)
      .reduce((prev, curr) => (prev += curr), 0) * -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${plus}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${minus}</p>
      </div>
    </div>
  );
};
