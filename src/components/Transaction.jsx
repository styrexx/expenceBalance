import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalContext";

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const { deletTransaction } = useContext(GlobalContext);

  return (
    <li
      className={sign === "-" ? "minus " : "plus"}
      onClick={() => deletTransaction(transaction.id)}
    >
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
    </li>
  );
};
